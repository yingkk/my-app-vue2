import Vue from "vue";

Vue.directive("auth", {
  bind(el, binding) {
    // 获取当前登录用户的角色信息（这里假设已经有相应的数据）
    // const userRole = getUserRole();
    const userRole = ["admin", "test"];
    const roleCode = binding.value; // 按钮级别权限码

    // 如果当前用户的角色不包含当前按钮的权限码
    if (!userRole.includes(roleCode)) {
      el.parentNode && el.parentNode.removeChild(el); //删除Dom
    }
  },
});
