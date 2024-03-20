<template>
  <div class="login-user">
    <slot :user="slotProp"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slotProp: {
        account: "001",
        realname: "张三",
      },
    };
  },
};
</script>
<style lang="less" scoped></style>
