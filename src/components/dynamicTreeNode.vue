<template>
  <div class="tree-node" @click.stop="hanldeClick">
    <div class="tree-node-label">{{ node.title }}</div>
    <div class="tree-node-children">
      <tree-node
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @node-click="nodeClick"
      >
      </tree-node>
    </div>
  </div>
</template>
<script>
export default {
  name: "treeNode",
  props: {
    node: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    hanldeClick() {
      // this.$parent.$emit("node-click", this.node);
      console.log(this.$parent);
      this.$emit("node-click", this.node);
    },
    nodeClick(node) {
      // this.$parent.$emit("node-click", node);
      this.$emit("node-click", node);
    },
  },
};
</script>
<style lang="less" scoped></style>
