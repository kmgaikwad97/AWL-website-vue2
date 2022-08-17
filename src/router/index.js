import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import AboutUs from '../views/AboutUs.vue'
import OurServices from '../views/OurServices.vue'
import BespokeDev from '../views/BespokeDev.vue'
import BespokeCon from '../views/BespokeCon.vue'
import BespokeInteriors from '../views/BespokeInteriors.vue'
import BespokeHeritage from '../views/BespokeHeritage.vue'
import BespokeKitchen from '../views/BespokeKitchen.vue'
import BespokeBathroom from '../views/BespokeBathroom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/ourservices',
    name: 'OurServices',
    component: OurServices
  },
  {
    path: '/besdev',
    name: 'BespokeDev',
    component: BespokeDev
  },
  {
    path: '/bescon',
    name: 'BespokeCon',
    component: BespokeCon
  },
  {
    path: '/besint',
    name: 'BespokeInteriors',
    component: BespokeInteriors
  },
  {
    path: '/besher',
    name: 'BespokeHeritage',
    component: BespokeHeritage
  },
  {
    path: '/beskit',
    name: 'BespokeKitchen',
    component: BespokeKitchen
  },
  {
    path: '/besbat',
    name: 'BespokeBathroom',
    component: BespokeBathroom
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
