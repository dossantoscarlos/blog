import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/layout/Posts/Posts'
import Blog from '@/components/layout/Body/Blog'
import Post from '@/components/layout/Body/Post'
import Portifolio from '@/components/layout/Body/Portifolio'
import About from '@/components/layout/Body/QuemSomos'
import Contado from '@/components/layout/Body/Contado'
import Home from '@/components/layout/Body/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'destaque da semana',
      children: [
        {
          path: '/destaque da semana',
          name: 'home.blog',
          component: Blog
        },
        {
          path: '/about',
          name: 'home.about',
          component: About
        },
        {
          path: '/contado',
          name: 'home.contado',
          component: Contado
        },
        {
          path: '/portifolio',
          name: 'home.portifolio',
          component: Portifolio
        },
        {
          path: '/post/:titulo/:id',
          name: 'home.post',
          component: Post,
          props: true
        },
        {
          path: '/posts/',
          name: 'home.posts',
          component: Posts,
          props: true
        }
      ]
    }
  ],
  mode: 'history',
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active'
})
