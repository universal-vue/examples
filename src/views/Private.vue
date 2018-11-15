<template>
  <PageLayout title="Private">
    <p>This page show data with a private access: you need to be logged.</p>

    <RowsList :rows="rows" />
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout';
import RowsList from '@/components/RowsList';

export default {
  components: {
    PageLayout,
    RowsList,
  },

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
