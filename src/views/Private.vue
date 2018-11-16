<template>
  <PageLayout title="Private">
    <p>This page show data with a private access: you need to be logged.</p>

    <RowsList :rows="rows" />
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout';
import RowsList from '@/components/RowsList';
import { pageEnterEffect, pageLeaveEffect } from '@/effects';

export default {
  mixins: [pageEnterEffect, pageLeaveEffect],

  components: {
    PageLayout,
    RowsList,
  },

  /**
   * Simple middleware to check user is already logged or not
   * If not: redirect him to login page
   */
  middlewares: [
    async ({ store, redirect }) => {
      if (!store.state.user.logged) {
        redirect('/profile?from=/private');
      }
    },
  ],

  async asyncData({ http }) {
    const { data: rows } = await http.get('/api/private');
    return {
      rows,
    };
  },
};
</script>
