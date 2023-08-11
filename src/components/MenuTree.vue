<!--
 * @Author: 871423948@qq.com
 * @Date: 2023-08-08 16:09:15
 * @LastEditors: 871423948@qq.com
 * @LastEditTime: 2023-08-08 16:26:09
 * @Description: 导航菜单子组件
-->
<template>
  <div>
    <el-submenu v-if="menuData.children && menuData.children.length" :index="menuData.path">
      <template slot="title">
        <i :class="menuData.icon"></i>
        <span>{{ menuData.name }}</span>
      </template>
      <MenuTree v-for="item in menuData.children" :key="item.path" :menuData="item" />
    </el-submenu>
    <el-menu-item v-else :index="menuData.path">
      <template slot="title">
        <i :class="menuData.icon"></i>
        <span>{{ menuData.name }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: "MenuTree",
  // 引入组件
  components: {},
  props: {
    menuData: {
      type: Object,
      default() {
        return {};
      },
      require: true,
    },
  },
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
