<template>
  <PageLayout title="404 - Not found !">
    <p>This page simply demonstrate how to setup a 404 page</p>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout.vue';
import { pageEnterEffect, pageLeaveEffect } from '@/effects';

export default {
  mixins: [pageEnterEffect, pageLeaveEffect],

  components: {
    PageLayout,
  },

  /**
   * We add a middleware to return a response with 404 status code
   * on server side.
   */
  middlewares: [
    ({ ssr }) => {
      if (process.server) {
        ssr.statusCode = 404;
      }
    },
  ],
};
</script>
