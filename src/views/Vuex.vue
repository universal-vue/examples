<template>
  <PageLayout title="Vuex">
    <p>This page show data loaded via <code>fetch()</code> on current page component</p>

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

  computed: {
    rows() {
      return this.$store.state.rows;
    },
  },

  /**
   * This method is similar to asyncData() but cannot inject data to current
   * component, so we use Vuex to store and display data on this page.
   */
  async fetch({ store }) {
    await store.dispatch('fetchRows');
  },
};
</script>
