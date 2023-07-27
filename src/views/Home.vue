<template>
  <div class="app-wrapper">
    <Header />
    <div class="app-content">
      <Aside />
      <div class="app-body"><Main /></div>
    </div>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import Header from "@/components/layout/Header.vue";
import Aside from "@/components/layout/Aside.vue";
import Main from "@/components/layout/Main.vue";
export default {
  name: "VHome",
  // 引入组件
  components: { Header, Aside, Main },
  props: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
  // 方法集合
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>
