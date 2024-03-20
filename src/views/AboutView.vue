<template>
  <div class="about">
    <fruits-component :fruitGroup="fruits"></fruits-component>
    <tree-component
      :treeData="tree"
      @node-click="handleNodeClick"
      @node-expand="handleNodeExpand"
    ></tree-component>

    <dynamic-tree :treeData="tree" @node-click="handleNodeClick"></dynamic-tree>

    <custom-input v-model="inputValue"></custom-input>

    <button @click="handleClickMsgBox">点我打开信息提示框</button>
    <message-box v-bind="msg" @close="handleCloseMsgBox"></message-box>

    <dynamic-component></dynamic-component>

    <!-- 非prop属性 会添加到子组件的根元素上 parent class 会与 child class合并/替换 -->
    <common-info class="parent-component-style" value="222"></common-info>

    <base-input
      label="Username:"
      v-model="username"
      required
      placeholder="Enter your username"
    ></base-input>

    <base-checkbox label="苹果:" v-model="checkvalue" required></base-checkbox>

    <sync-component
      :title="title"
      @update:title="childUpdateTitle"
    ></sync-component>

    <sync-component v-bind:title.sync="title"></sync-component>

    <navigation-link :url="urlStr">百度</navigation-link>
    <navigation-link :url="urlStr"
      >This slot content is :{{ msg.title }}</navigation-link
    >
    <!--
      这里的`url`会是 undefined，因为其 (指该插槽的) 内容是传递给 <navigation-link> 的
      而不是在 <navigation-link> 组件内部定义的。
    -->
    <!-- <navigation-link :url="url"
      >Clicking here will send you to: {{ url }}</navigation-link
    > -->
    <navigation-link></navigation-link>

    <!-- slot 具名插槽和默认插槽 -->
    <base-layout>
      <template v-slot:header>
        <h1>This is header content</h1>
      </template>
      <template v-slot:default>
        <h1>This is main content</h1>
        <p>This is default slot</p>
      </template>
      <template v-slot:footer>
        <h1>This is footer content</h1>
      </template>
    </base-layout>

    <!-- v-slot: 简写为# -->
    <base-layout>
      <template #header>
        <h1>This is header content</h1>
      </template>
      <template #default>
        <h1>This is main content</h1>
        <p>This is default slot</p>
      </template>
      <template #footer>
        <h1>This is footer content</h1>
      </template>
    </base-layout>

    <!-- slot 作用域插槽 -->
    <login-user v-slot="slotProp">
      <p>{{ slotProp.user.realname }}</p>
    </login-user>
    <!-- slot  -->
    <login-user #default="slotProp">
      <p>{{ slotProp.user.realname }}</p>
    </login-user>

    <!-- slot 作用域插槽 user重命名为person -->
    <login-user v-slot="{ user: person }">
      <p>{{ person.realname }}</p>
    </login-user>
    <!--  使用缩写 必须用明确的插槽名-->
    <login-user #default="{ user: person }">
      <p>{{ person.realname }}</p>
    </login-user>

    <!-- 动态插槽名 -->
    <dynamic-slot v-for="item in slotNames" :key="item">
      <template v-slot:[item]>
        <template v-if="item === 'header'"> i am header </template>
        <template v-if="item === 'aside'"> i am aside </template>
        <template v-if="item === 'footer'"> i am footer </template>
        <template v-if="item === 'default'"> i am main </template>
      </template>
    </dynamic-slot>

    <todo-list :todos="todos">
      <template v-slot:todoItem="{ todo }">
        <span v-if="todo.isComplate">ok</span>
        {{ todo.title }}
      </template>
    </todo-list>

    <!-- slot-scope  todo只作用于template -->
    <!-- <todo-list :todos="todos">
      <template slot="todo" slot-scope="{ todo }">
        <span v-if="todo.isComplate">✓</span>
        {{ todo.title }}
      </template>
    </todo-list> -->
  </div>
</template>
<script>
import DynamicComponentFruits from "@/components/dynamicComponentFruits.vue";
import DynamicComponentTree from "@/components/dynamicComponentTree.vue";
import DynamicTree from "@/components/dynamicTree.vue";
import CustomInput from "@/components/customInput.vue";
import MessageBox from "@/components/messageBox.vue";
import DynamicComponent from "@/components/dynamicComponent.vue";
import BaseCheckbox from "@/components/common/baseCheckbox.vue";
import SyncComponent from "@/components/sync-component.vue";
import NavigationLink from "@/components/navigationLink.vue";
import BaseLayout from "@/components/common/baseLayout.vue";
import LoginUser from "@/components/common/loginUser.vue";
import DynamicSlot from "@/components/dynamicSlot.vue";
import TodoListComponent from "@/components/todoListComponent.vue";

import mixin from "@/mixins/mixins";

export default {
  components: {
    fruitsComponent: DynamicComponentFruits,
    treeComponent: DynamicComponentTree,
    dynamicTree: DynamicTree,
    customInput: CustomInput,
    messageBox: MessageBox,
    dynamicComponent: DynamicComponent,
    baseCheckbox: BaseCheckbox,
    syncComponent: SyncComponent,
    navigationLink: NavigationLink,
    baseLayout: BaseLayout,
    loginUser: LoginUser,
    dynamicSlot: DynamicSlot,
    todoList: TodoListComponent,
  },
  mixins: [mixin],
  data() {
    return {
      title: "123",
      fruits: [
        { id: "001", name: "香蕉" },
        { id: "002", name: "苹果" },
        { id: "003", name: "橙子" },
        { id: "004", name: "草莓" },
        { id: "005", name: "芒果" },
      ],
      tree: [
        {
          id: "1",
          parentId: undefined,
          title: "1",
          expanded: false,
          isLeaf: false,
          children: [
            {
              id: "1-1",
              parentId: "1",
              title: "1-1",
              expanded: false,
              isLeaf: false,
              children: [
                {
                  id: "1-1-1",
                  parentId: "1-1",
                  title: "1-1-1",
                  expanded: false,
                  isLeaf: true,
                  children: [],
                },
                {
                  id: "1-1-2",
                  parentId: "1-1",
                  title: "1-1-2",
                  expanded: false,
                  isLeaf: true,
                  children: [],
                },
              ],
            },
            {
              id: "1-2",
              parentId: "1",
              title: "1-2",
              expanded: false,
              isLeaf: false,
              children: [
                {
                  id: "8",
                  parentId: "1-2",
                  title: "1-2-1",
                  expanded: false,
                  isLeaf: true,
                  children: [],
                },
                {
                  id: "9",
                  parentId: "1-2",
                  title: "1-2-2",
                  expanded: false,
                  isLeaf: true,
                  children: [],
                },
              ],
            },
            {
              id: "1-3",
              parentId: "1",
              title: "1-3",
              expanded: false,
              isLeaf: false,
              children: [
                {
                  id: "10",
                  parentId: "1-3",
                  title: "1-3-1",
                  expanded: false,
                  isLeaf: false,
                  children: [
                    {
                      id: "12",
                      parentId: "1-3-1",
                      title: "1-3-1-1",
                      expanded: false,
                      isLeaf: true,
                      children: [],
                    },
                  ],
                },
                {
                  id: "11",
                  parentId: "1-3",
                  title: "1-3-2",
                  expanded: false,
                  isLeaf: true,
                  children: [],
                },
              ],
            },
            { id: "1-4", parentId: "1", title: "1-4", children: [] },
          ],
        },
      ],
      inputValue: "",
      msg: {
        title: "提示信息",
        message: "请先选择需要操作的数据",
        visible: false,
      },
      username: "",
      checkvalue: false,
      urlStr: "http://www.baidu.com",
      slotNames: ["header", "aside", "default", "footer"],
      todos: [
        { id: "1", title: "请假审批", isComplate: true },
        { id: "2", title: "变更审批", isComplate: false },
        { id: "3", title: "离职审批", isComplate: false },
      ],
    };
  },
  created() {
    console.log("组件created被调用"); //1.同名钩子函数将合并为一个数组，因此都将被调用 2.混入对象的钩子在组件自身钩子之前调用
    console.log(this.$data); //数据对象在组件内部会进行递归合并，并在发生冲突时以组件数据优先
    console.log(this.title); //组件的title并未被覆盖
  },
  watch: {
    title(value) {
      console.log("value", value);
    },
    inputValue(newValue, oldValue) {
      console.log(newValue, oldValue);
    },
  },
  methods: {
    handleNodeClick(node) {
      console.log(node.title, "click");
    },
    handleNodeExpand(node) {
      console.log(node.title, "expanded");
    },
    handleClickMsgBox() {
      this.visible = true;
    },
    handleCloseMsgBox() {
      this.visible = false;
    },
    childUpdateTitle($event) {
      this.title = $event;
    },
  },
};
</script>
<style lang="less" scoped>
.parent-component-style {
  width: 100%;
  font-size: 16px;
}
</style>
