<template>
  <div class="dynamic-component-fruits">
    <div class="frults-wrap" v-for="(item, index) in fruitGroup" :key="item.id">
      <div class="fruit-item">{{ index }}.{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fruitGroup: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.frults-wrap {
  width: 100%;
  .fruit-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 36px;
  }
}
</style>
