import Vue from "vue";

/**
 * slots() 和children的对比
 * eg:
 *  <my-functional-component>
 *    <p v-slot:foo>
 *      first
 *    </p>
 *    <p>second</p>
 *  </my-functional-component>
 *
 * slots():  slots().default只能传递匿名插槽的元素数组(第二个匿名段落标签)，
 *            slots().foo 会传递第一个具名段落标签
 *
 * children: 会给两个段落标签
 */
Vue.component("anchor-head", {
  render(createElement) {
    console.log(this);
    return createElement("h" + this.level, this.$slots.default); // this.$slots.default 子节点数组
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});

Vue.component("anchor-head2", {
  functional: true, // 该组件无状态 (没有响应式数据)，也没有实例 (没有 this 上下文)
  render(createElement, context) {
    console.log(context);
    return createElement("h" + context.props.level, context.children); // context是上下文
  },
});

// var getChildrenTextContent = function (children) {
//   return children
//     .map(function (node) {
//       return node.children ? getChildrenTextContent(node.children) : node.text;
//     })
//     .join("");
// };

// Vue.component('anchored-heading', {
//   render: function (createElement) {
//     // 创建 kebab-case 风格的 ID
//     var headingId = getChildrenTextContent(this.$slots.default)
//       .toLowerCase()
//       .replace(/\W+/g, '-')
//       .replace(/(^-|-$)/g, '')

//     return createElement("h" + this.level, [
//       createElement(
//         "a",
//         {
//           attrs: {
//             name: headingId,
//             href: "#" + headingId,
//           }
//         },
//         this.$slots.default
//         ],
//     )
//   },
//   props: {
//     level: {
//       type: Number,
//       required: true
//     }
//   }
// })
