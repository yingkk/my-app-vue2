<template>
  <div class="next-tick-example">
    <span>{{ message }}</span>
    <button @click="updateMessage">更新</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "你好",
    };
  },
  created() {},
  methods: {
    updateMessage() {
      /**
       *  $nextTick():
       *   Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，
       *   Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
       *   如果同一个 watcher 被多次触发，只会被推入到队列中一次。
       *  这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。
       *  然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
       *  Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，
       *  如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
       */
      this.message = "他好";
      console.log(this.$el.textContent); //你好更新
      this.$nextTick(() => console.log(this.$el.textContent)); //你好更新
      console.log(this.$el.textContent); // 他好更新
    },
  },
};
</script>
<style lang="less" scoped></style>
