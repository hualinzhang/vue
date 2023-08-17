<!--
 * @Author: 871423948@qq.com
 * @Date: 2023-07-26 14:39:29
 * @LastEditors: 871423948@qq.com
 * @LastEditTime: 2023-08-17 14:56:55
 * @Description: 头部
-->
<template>
  <div class="header">
    <h1>vue项目</h1>
  </div>
  <!-- <ui-header
    :system="system"
    :default-active="active"
    :theme="theme"
    text="交易系统"
    :logo="require('./avatar.svg')"
    @select="menuSelect"
    @item-handle-click="itemClick"
    @quit="quit"
  >
    <template slot="option">
      <el-button type="text">文字按钮</el-button>
      <el-dropdown @command="handleCommand">
        <el-button type="text" icon-right="el-icon-arrow-down">换肤</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in skinList"
            :key="item.skinCode"
            :command="item.skinCode"
            :class="theme === item.skinCode ? 'active-dropdown' : ''"
          >
            {{ item.skinName }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
  </ui-header> -->
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
export default {
  name: "VHeader",
  // 引入组件
  components: {},
  props: {},
  data() {
    // 这里存放数据
    return {
      skinList: [
        {
          id: "8a80eb988224e7a1018224e7d59c0000",
          skinCode: "red",
          skinName: "玫瑰红",
          sorts: 1,
          userId: null,
        },
        {
          id: "8a80eb988224e7a1018224e7d5ac0001",
          skinCode: "dark",
          skinName: "星空蓝",
          sorts: 2,
          userId: null,
        },
        {
          id: "8a80eb988224e7a1018224e7d5ac0002",
          skinCode: "indigo",
          skinName: "深海蓝",
          sorts: 3,
          userId: null,
        },
        {
          id: "8a80eb988224e7a1018224e7d5ad0003",
          skinCode: "teal",
          skinName: "孔雀绿",
          sorts: 4,
          userId: null,
        },
        {
          id: "8a80eb988224e7a1018224e7d5ad0004",
          skinCode: "blue",
          skinName: "天空蓝",
          sorts: 5,
          userId: null,
        }
      ],
      theme: "dark",
      active: "http://10.0.107.24:8080/g3/1",
      system: [
        {
          id: "8a80eb987c9b6060017c9b9f5cf40002",
          systemName: "表单中心",
          sort: 1,
          systemCode: "g3-module-form-1.0.0",
          webUrl: "http://10.0.107.24:8080/g3/1",
          identifyMode: "1",
          isShowMenu: 1,
          entry: null,
          activeRule: null,
          props: null,
        },
        {
          id: "8a804c29713e5b21017185b6a1cd0ac5",
          systemName: "建设工程",
          sort: 2,
          systemCode: "G3_GB",
          webUrl: "http://10.0.107.24:8080/g3/2",
          identifyMode: "2",
          isShowMenu: 2,
          entry: null,
          activeRule: null,
          props: null,
        },
        {
          id: "8a80eb98805fbd0e01806389caf50012",
          systemName: "后端管理",
          sort: 3,
          systemCode: "HTGLY",
          webUrl: "http://10.0.107.24:8080/g3/3",
          identifyMode: "1",
          isShowMenu: 1,
          entry: null,
          activeRule: null,
          props: null,
        },
        {
          id: "8a80eb9880efcf890180f032464d002f",
          systemName: "运维系统",
          sort: 4,
          systemCode: "YWXT",
          webUrl: "http://10.0.107.24:8080/g3/4",
          identifyMode: "1",
          isShowMenu: 1,
          entry: null,
          activeRule: null,
          props: null,
        }
      ],

    };
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
  methods: {
    handleCommand(command) {
      this.theme = command;
    },
    menuSelect(index, indexPath) {
      console.log(index, indexPath);
    },
    itemClick(val) {
      console.log(val);
    },
    quit() {
      console.log("退出");
    },
  },
};
</script>
<style lang='scss' scoped>
.header {
  height: 60px;
  line-height: 60px;
  background-color: #3C3C3C;
  color: #fff;
}
</style>
