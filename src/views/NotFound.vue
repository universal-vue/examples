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
};
</script>
