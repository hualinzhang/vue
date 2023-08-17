/*
 * @Author: 871423948@qq.com
 * @Date: 2023-08-08 15:48:52
 * @LastEditors: 871423948@qq.com
 * @LastEditTime: 2023-08-17 15:51:01
 * @Description: 菜单列表
 */
export const menuList = [
  {
    name: "Table 表格",
    path: "/Table",
    icon: "icon-biaoge",
    children: [
      {
        name: "表格滚动",
        path: "/Table/TableAutoScroll",
        icon: "el-icon-folder",
        children: [
          {
            name: "vue-seamless-scroll依赖实现",
            path: "/Table/TableAutoScroll/ScrollSeamless",
            icon: "el-icon-file",
          },
          {
            name: "自定义实现",
            path: "/Table/TableAutoScroll/ScrollSelf",
            icon: "el-icon-file",
          }
        ],
      }
    ],
  },
  {
    name: "Graph 拓扑图",
    path: "/graph",
    icon: "el-icon-setting",
    children: [
      {
        name: "流程图",
        path: "---",
        icon: "el-icon-setting",
      }
    ],
  },
  {
    name: "Echarts 可视化图表",
    path: "/echarts",
    icon: "el-icon-setting",
    children: [
      {
        name: "流程图",
        path: "---",
        icon: "el-icon-setting",
      }
    ],
  }
];
