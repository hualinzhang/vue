<!--
 * @Author: 871423948@qq.com
 * @Date: 2023-07-26 14:43:10
 * @LastEditors: 871423948@qq.com
 * @LastEditTime: 2023-08-10 14:30:09
 * @Description: 侧边栏
-->
<template>
  <div class="aside">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      active-background-color="#434a50"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <MenuTree v-for="item in menuArr" :key="item.path" :menuData="item" />
    </el-menu>
  </div>
</template>

<script>
import { menuList } from "@/permission/menuList";
import MenuTree from "@/components/MenuTree";
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: "VAside",
  // 引入组件
  components: { MenuTree },
  props: {},
  data() {
    // 这里存放数据
    return {};
  },
  // 监听属性 类似于data概念
  computed: {
    menuArr() {
      return menuList;
    },
  },
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
.aside {
  width:300px;
  background-color:#545c64;
}
</style>
