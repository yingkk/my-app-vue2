<template>
  <div class="dynamic-component">
    <button
      :class="[
        'dynamic-component-tab-btn',
        { 'dynamic-component-tab-btn-active': btn.id === activeComponentId },
      ]"
      v-for="btn in btnsLable"
      :key="btn.id"
      @click="handleChange(btn)"
    >
      {{ btn.title }}
    </button>
    <div class="dynamic-component-tab">
      <!-- keep-alive 保持组件状态-->
      <keep-alive>
        <component :is="activeComponentId"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HomeComponent from "./HomeComponent.vue";
import PostsComponent from "./postsComponent.vue";
import ArchiveComponent from "./archiveComponent.vue";
export default {
  components: {
    homeComponent: HomeComponent,
    postsComponent: PostsComponent,
    archiveComponent: ArchiveComponent,
  },
  data() {
    return {
      btnsLable: [
        { id: "homeComponent", title: "Home", component: HomeComponent },
        { id: "postsComponent", title: "Posts", component: PostsComponent },
        {
          id: "archiveComponent",
          title: "Archive",
          component: ArchiveComponent,
        },
      ],
      activeComponentId: "homeComponent", // activeComponentId 可以是组件名"homeComponent"，也可以是组件实例HomeComponent
    };
  },
  methods: {
    handleChange(btn) {
      this.activeComponentId = btn.id;
    },
  },
};
</script>
<style lang="less" scoped>
.dynamic-component {
  width: 100%;
  .dynamic-component-tab-btn {
    display: inline-block;
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .dynamic-component-tab-btn-active {
    background: #e0e0e0;
  }
}
</style>
