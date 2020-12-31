import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
// Containers
const TheContainer = () => import('../containers/TheContainer.vue')

// Views
const Dashboard = () => import('../components/Dashboard.vue')

const Colors = () => import('../components/theme/Colors.vue')
const Typography = () => import('../components/theme/Typography.vue')

const Charts = () => import('../components/charts/Charts.vue')
const Widgets = () => import('../components/widgets/Widgets.vue')

// Views - Components
const Cards = () => import('../components/base/Cards')
const Forms = () => import('../components/base/Forms')
const Switches = () => import('../components/base/Switches')
const Tables = () => import('../components/base/Tables')
const Tabs = () => import('../components/base/Tabs')
const Breadcrumbs = () => import('../components/base/Breadcrumbs')
const Carousels = () => import('../components/base/Carousels')
const Collapses = () => import('../components/base/Collapses')
const Jumbotrons = () => import('../components/base/Jumbotrons')
const ListGroups = () => import('../components/base/ListGroups')
const Navs = () => import('../components/base/Navs')
const Navbars = () => import('../components/base/Navbars')
const Paginations = () => import('../components/base/Paginations')
const Popovers = () => import('../components/base/Popovers')
const ProgressBars = () => import('../components/base/ProgressBars')
const Tooltips = () => import('../components/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('../components/buttons/StandardButtons')
const ButtonGroups = () => import('../components/buttons/ButtonGroups')
const Dropdowns = () => import('../components/buttons/Dropdowns')
const BrandButtons = () => import('../components/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('../components/icons/CoreUIIcons')
const Brands = () => import('../components/icons/Brands')
const Flags = () => import('../components/icons/Flags')

// Views - Notifications
const Alerts = () => import('../components/notifications/Alerts')
const Badges = () => import('../components/notifications/Badges')
const Modals = () => import('../components/notifications/Modals')

// Views - Pages
const Page404 = () => import('../components/pages/Page404')
const Page500 = () => import('../components/pages/Page500')
const Login = () => import('../components/pages/Login')
const Register = () => import('../components/pages/Register')

// Users
const Users = () => import('../components/users/Users')
const User = () => import('../components/users/User')

Vue.use(VueRouter)



const routes = [
    {
      path: '/',
      name: 'Home',
      component: Dashboard,
      meta: {
        layout: 'default',
        auth: true,
      },
      beforeEnter: (to, from, next) => {
        if (store.state.auth.token) {
          next()
          return
        }
        next('/login')
      },
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/500',
      name: 'Page500',
      component: Page500
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        layout: 'none',
        auth: true,
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]

const router =  new VueRouter({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  // if (!store.state.auth) {
  //   router.push({ 
  //     name: 'login',
  //     params: {
  //       returnTo: to.path,
  //       query: to.query,
  //     },
  //   });
  // }
  next()
})

export default router
