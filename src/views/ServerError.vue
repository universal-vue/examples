<template>
  <PageLayout title="Server error">
    <p>
      This page cannot be rendered on server because it uses <code>window</code> object in
      <code>created()</code> component hook. If you refresh this page you will see a server error
      page instead.
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

  created() {
    /**
     * This will cause a server side error because `window` is
     * not defined in NodeJS process
     */
    window.console.log('Cannot do that on server!');
  },
};
</script>
