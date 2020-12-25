import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
Vue.use(VueRouter)

const routes = [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        layout: 'member',
        auth: true,
        title: 'Home'
      },
    }
];
const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active"
});

export default router;
