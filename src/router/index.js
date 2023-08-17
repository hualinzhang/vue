import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () =>
        import("../views/Home.vue"),
      children: [
        {
          path: "/Table",
          name: "Table",
          component: { render: (c) => c("router-view") },
          redirect: { name: "tableAutoScroll" }, // 页面重定向到新路由
          children: [
            {
              path: "TableAutoScroll",
              name: "TableAutoScroll",
              component: { render: (c) => c("router-view") },
              redirect: { name: "ScrollSeamless" }, // 页面重定向到新路由
              children: [
                {
                  path: "ScrollSeamless",
                  name: "ScrollSeamless",
                  component: () =>
                    import("../views/Table/TableAutoScroll/ScrollSeamless.vue"),
                },
                {
                  path: "ScrollSelf",
                  name: "ScrollSelf",
                  component: () =>
                    import("../views/Table/TableAutoScroll/ScrollSelf.vue"),
                }
              ],
            }
          ],
        }
      ],
    }
  ],
});
