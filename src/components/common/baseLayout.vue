<template>
  <div class="base-layout">
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped></style>
