<!--
  This component is responsible of displaying a nice error page in case the errorHandler plugin have caught an error
-->
<template>
  <PageLayout title="Error!">
    <p>
      Status code: <strong>{{ $errorHandler.statusCode }}</strong>
    </p>
    <pre v-if="$errorHandler.error.stack">{{ $errorHandler.error.stack }}</pre>
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

<style lang="scss">
pre {
  max-width: 75rem;
  overflow-x: auto;
}
</style>
