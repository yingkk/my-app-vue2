<template>
  <div class="render">
    <anchored-heading><p>测试</p></anchored-heading>
    <!-- 
      向组件中传递不带 v-slot 指令的子节点时，比如 anchored-heading 中的 <p>测试</p>，
      这些子节点被存储在组件实例中的 $slots.default 中 
    -->
    <a name="head1" href="#head1">
      <anchor-head :level="1"><span>标题1</span></anchor-head>
    </a>

    <a name="head2" href="#head2">
      <anchor-head2 :level="2"><span>标题2</span></anchor-head2>
    </a>

    <next-tick-example></next-tick-example>
  </div>
</template>
<script>
import AnchoredHeading from "@/components/anchoredHeading.vue";
import NextTickExample from "@/components/nextTickExample.vue";
export default {
  components: {
    anchoredHeading: AnchoredHeading,
    nextTickExample: NextTickExample,
  },
};
</script>
<style lang="less" scoped></style>
