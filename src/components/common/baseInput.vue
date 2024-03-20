<template>
  <div class="base-input">
    <label>
      {{ label }}
      <input type="text" v-bind="$attrs" :value="value" @input="handleInput" />
    </label>
  </div>
</template>
<script>
export default {
  /* 为true会将父组件的required和placeholder属性添加到组件根元素base-input的div,
     为false则不会
     而 v-bind="$attrs"则会手动决定添加到指定的元素上
  */
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>
<style lang="less" scoped></style>
