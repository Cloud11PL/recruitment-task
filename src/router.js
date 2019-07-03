import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import ItemPage from './views/ItemPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/item/:itemId',
      name: 'item',
      component: ItemPage,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
