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

export default {
  components: {
    PageLayout,
  },

  created() {
    window.console.log('Cannot do that on server!');
  },
};
</script>
