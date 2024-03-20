<template>
  <div class="dynamic-slot">
    <header>
      <slot name="header"></slot>
    </header>
    <aside><slot name="aside"></slot></aside>
    <main><slot></slot></main>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped></style>
