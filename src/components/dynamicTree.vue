<template>
  <div class="tree">
    <tree-node
      v-for="node in treeData"
      :key="node.id"
      :node="node"
      @node-click="handleNodeClick"
    ></tree-node>
  </div>
</template>
<script>
import TreeNode from "./dynamicTreeNode.vue";
export default {
  components: {
    treeNode: TreeNode,
  },
  props: {
    treeData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    handleNodeClick(node) {
      this.$emit("node-click", node);
    },
  },
};
</script>
<style lang="less" scoped></style>
