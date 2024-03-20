<template>
  <div class="nav-link">
    <a :href="url"><slot>插槽的后备内容</slot></a>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
