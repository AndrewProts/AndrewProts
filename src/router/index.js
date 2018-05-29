import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import NotFound from '@/components/NotFound'
import About from '@/components/About'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
