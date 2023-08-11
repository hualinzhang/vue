/*
 * @Author: 871423948@qq.com
 * @Date: 2023-08-08 15:48:52
 * @LastEditors: 871423948@qq.com
 * @LastEditTime: 2023-08-10 10:41:23
 * @Description: 菜单列表
 */
export const menuList = [
  {
    name: "Table 表格",
    path: "/table",
    icon: "el-icon-setting",
    children: [
      {
        name: "表格滚动",
        path: "/table/tableAutoScroll",
        icon: "el-icon-setting",
        children: [
          {
            name: "自定义实现",
            path: "/table/tableAutoScroll/111",
            icon: "el-icon-setting",
          },
          {
            name: "vue-seamless-scroll依赖实现",
            path: "/table/tableAutoScroll/222",
            icon: "el-icon-setting",
          }
        ],
      }
      // {
      //   name: "自定义表格滚动",
      //   path: "/table/tableAutoScroll",
      //   icon: "el-icon-setting",
      // },
      // {
      //   name: "vue-seamless-scroll实现表格滚动",
      //   path: "/table/tableAutoScroll2",
      //   icon: "el-icon-setting",
      // }
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
