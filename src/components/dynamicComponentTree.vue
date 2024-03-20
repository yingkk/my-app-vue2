<template>
  <div class="tree-item">
    <div class="tree-group" v-for="item in treeData" :key="item.id">
      <div class="tree-node" @click.stop="handleClick(item)">
        {{ item.title }}
      </div>
      <template v-if="item.children.length && item.expanded">
        <tree-component
          :treeData="item.children"
          @node-click="nodeClick"
          @node-expand="nodeExpand"
        ></tree-component>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "treeComponent",
  props: {
    treeData: Array,
    default: [],
  },
  data() {
    return {};
  },
  methods: {
    handleClick(item) {
      this.$emit("node-click", item);
      item.expanded = !item.expanded;
      this.$emit("node-expand", item);
    },
    nodeClick(item) {
      this.$emit("node-click", item);
    },
    nodeExpand(item) {
      this.$emit("node-expand", item);
    },
  },
};
</script>
<style lang="less" scoped>
.tree-item {
  width: 100%;
  padding-left: 20px;
  .tree-group {
    .tree-node {
      width: 100%;
      height: 36px;
      line-height: 36px;
      text-align: left;
      cursor: pointer;
    }
  }
}
</style>

<!--
  <template>
  <div class="dynamic-component-tree">
    <node-component :treeData="treeData"></node-component>
  </div>
</template>
<script>
import NodeComponent from "@/components/dynamicComponentNode.vue";
export default {
  components: {
    nodeComponent: NodeComponent,
  },
  props: {
    treeData: Array,
  },
};
</script>
<style lang="less" scoped>
.dynamic-component-tree {
  width: 100%;
}
</style>
-->
