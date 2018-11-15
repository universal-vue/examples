<template>
  <PageLayout title="404 - Not found !">
    <p>This page simply demonstrate how to setup a 404 page</p>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout.vue';

export default {
  components: {
    PageLayout,
  },

  middlewares: [
    ({ ssr }) => {
      if (process.server) {
        ssr.statusCode = 404;
      }
    },
  ],
};
</script>
