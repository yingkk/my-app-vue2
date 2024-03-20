<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id" :id="todo.id | addZero">
        <slot name="todoItem" :todo="todo"> {{ todo.title }}</slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  filters: {
    addZero(value) {
      return value < 10 ? "0" + value : value;
    },
  },
};
</script>
<style lang="less" scoped></style>
