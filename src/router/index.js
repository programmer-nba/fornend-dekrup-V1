// import { createRouter, createWebHistory } from "vue-router";

// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// const routes = [
//     {path: "/",component: HomeView},
//     {path: "/aboutview" ,component: AboutView}
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

// export default router;



// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/aboutview',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
  // เพิ่ม route อื่น ๆ ตรงนี้
];

const router = new VueRouter({
  routes,
});

export default router;
