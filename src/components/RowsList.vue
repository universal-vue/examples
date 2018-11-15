<template>
  <div class="rows-list">
    <div class="item" v-for="(row, index) in rows" :key="index">
      <div class="picture"><img :src="row.picture + `?index=${index}`" /></div>
      <div class="texts">
        <h2>{{ row.title }}</h2>
        <p>{{ row.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.rows-list {
  margin-top: 6rem;

  .item {
    padding-bottom: 4rem;
    display: flex;

    .picture {
      height: 19.2rem;
      min-width: 25.6rem;
      background: #ccc;
      margin-right: 3rem;
    }

    img {
      max-width: 25.6rem;
      margin: 0;
    }

    h2 {
      color: #999;

      &::after {
        content: '';
        display: block;
        height: 2px;
        background: #00ab6c;
        border-radius: 4px;
        width: 10rem;

        margin: 1rem 0 3rem 0;
      }
    }
  }
}
</style>
