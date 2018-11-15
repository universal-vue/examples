<template>
  <PageLayout title="Async data">
    <p>This page show data loaded via <code>asyncData()</code> on current page component</p>

    <div v-for="(row, index) in rows" :key="index">
      <h2>{{ row.title }}</h2>
      <p>{{ row.text }}</p>
    </div>
  </PageLayout>
</template>

<script>
import http from '@/http';
import PageLayout from '@/components/PageLayout';

export default {
  components: {
    PageLayout,
  },

  async asyncData() {
    const { data: rows } = await http.get('/api/public');
    return {
      rows,
    };
  },
};
</script>
