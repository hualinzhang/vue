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
          path: "/table",
          name: "table",
          component: { render: (c) => c("router-view") },
          redirect: { name: "tableAutoScroll" }, // 页面重定向到新路由
          children: [
            {
              path: "tableAutoScroll",
              name: "tableAutoScroll",
              component: () =>
                import("../views/table/tableAutoScroll.vue"),
            }
          ],
        }
      ],
    }
  ],
});
