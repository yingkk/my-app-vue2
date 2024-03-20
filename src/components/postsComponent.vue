<template>
  <div class="posts-component">
    <ul class="posts-component-sidebar">
      <li
        v-for="item in articles"
        :key="item.id"
        @click="handleClick(item)"
        :class="{ active: activeArticle && item.id === activeArticle.id }"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="posts-component-container">
      <strong v-if="!activeArticle">please click article title</strong>
      <template v-else>
        <h1>{{ activeArticle.title }}</h1>
        <p>{{ activeArticle.content }}</p>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        { id: "1", title: "Cat", content: "Cat is cute" },
        { id: "2", title: "Dog", content: "Dog is lovely" },
        { id: "3", title: "Pig", content: "Pig is pig" },
      ],
      activeArticle: null,
    };
  },
  methods: {
    handleClick(item) {
      this.activeArticle = item;
    },
  },
};
</script>
<style lang="less" scoped>
.posts-component {
  display: flex;
  justify-content: left;
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;

  .posts-component-sidebar {
    flex: none;
    width: 100px;
    padding-right: 8px;
    box-sizing: border-box;
    overflow: scroll;
    cursor: pointer;
    .active {
      background-color: #ccc;
    }
  }

  .posts-component-container {
    width: 100%;
  }
}
</style>
