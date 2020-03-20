import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/TopPage'
import About from '@/components/AboutPage'
import Works from '@/components/WorksPage'
import Contact from '@/components/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
