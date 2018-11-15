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

export default {
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
