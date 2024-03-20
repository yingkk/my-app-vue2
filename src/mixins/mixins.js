export default {
  data() {
    return {
      name: "admin",
      title: "mixinTitle",
    };
  },
  created() {
    console.log("混入的created被调用");
  },
  methods: {
    getFn() {
      console.log("from mixins");
    },
  },
};
