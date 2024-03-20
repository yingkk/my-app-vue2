<template>
  <div class="sync-component" @click="handleClick">
    {{ title }}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handleClick() {
      const newTitle = "newTitle";
      this.$emit("update:title", newTitle);
    },
  },
};
</script>
<style lang="less" scoped></style>
