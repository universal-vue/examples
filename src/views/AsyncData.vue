<template>
  <PageLayout title="Async data">
    <p>This page show data loaded via <code>asyncData()</code> on current page component</p>

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
   * Fetch data from API: with this method we can send directly fetched
   * data to current component.
   */
  async asyncData({ $http }) {
    const { data: rows } = await $http.get('/api/public');
    return {
      rows,
    };
  },
};
</script>
