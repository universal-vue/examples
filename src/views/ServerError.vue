<template>
  <PageLayout title="Server error">
    <p>
      {{ foo }}
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

  async asyncData({ $http }) {
    return {
      foo: await $http.get('/api/error'),
    };
  },
};
</script>
