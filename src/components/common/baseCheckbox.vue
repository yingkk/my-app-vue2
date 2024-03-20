<template>
  <div class="base-checkbox">
    <label>
      {{ label }}
      <input
        type="checkbox"
        v-bind="$attrs"
        :checked="checked"
        @change="handleChange"
      />
    </label>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  /** v-model：
   *  默认利用value属性和input事件，但对于checkbox和radio等类型的空间会将value用于不同目的，故在此用model用以区分
   */
  model: {
    prop: "checked",
    event: "change",
  },
  /**props依然要声明checked */
  props: {
    checked: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handleChange($event) {
      this.$emit("change", $event.target.checked);
    },
  },
};
</script>
<style lang="less" scoped></style>
