<template>
  <div class="message-box-wrapper" v-if="visible">
    <div class="message-box-inner">
      <div class="message-box">
        <div class="message-box-header">
          <div class="message-box-header-title">{{ title }}</div>
          <div class="message-box-header-close" @click="handleClose">X</div>
        </div>
        <div class="message-box-content">{{ message }}</div>
        <div class="message-box-btns"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "标题",
    },
    message: {
      type: String,
      default: () => "文本",
    },
    showClose: {
      type: Boolean,
      default: () => true,
    },
    visible: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClose() {
      debugger;
      this.$emit("close");
    },
  },
};
</script>
<style lang="less" scoped>
.message-box-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .message-box-inner {
    .message-box {
      display: inline-block;
      width: 420px;
      padding-bottom: 10px;
      vertical-align: middle;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      text-align: left;
      box-sizing: border-box;
      overflow: hidden;
      .message-box-header {
        position: relative;
        .message-box-header-title {
          padding: 15px 15px 10px;
          font-size: 16px;
          text-align: left;
        }
        .message-box-header-close {
          position: absolute;
          top: 15px;
          right: 15px;
          cursor: pointer;
        }
      }
      .message-box-content {
        padding: 10px 15px;
        color: #606266;
        font-size: 14px;
      }
    }
  }
  .show {
    display: block;
  }
}
</style>
