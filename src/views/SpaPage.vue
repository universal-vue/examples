<template>
  <PageLayout title="SPA page">
    <p>
      This page will show a loader during a full page refresh and is not rendered on server side!
    </p>
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
