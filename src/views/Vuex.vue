<template>
  <PageLayout title="Vuex">
    <p>This page show data loaded via <code>fetch()</code> on current page component</p>

    <div v-for="(row, index) in rows" :key="index">
      <h2>{{ row.title }}</h2>
      <p>{{ row.text }}</p>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout';

export default {
  components: {
    PageLayout,
  },

  computed: {
    rows() {
      return this.$store.state.rows;
    },
  },

  async fetch({ store }) {
    await store.dispatch('fetchRows');
  },
};
</script>
