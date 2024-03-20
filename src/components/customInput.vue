<template>
  <div>
    <input :value="inputValue" @input="handleInput" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>
<style lang="less" scoped></style>
