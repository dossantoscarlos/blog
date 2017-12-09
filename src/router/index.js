import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/layout/Posts/Posts'
import Blog from '@/components/layout/Body/Blog'
import Post from '@/components/layout/Body/Post'
import Portifolio from '@/components/layout/Body/Portifolio'
import About from '@/components/layout/Body/QuemSomos'
import Android from '@/components/layout/Body/Android'
import WebSites from '@/components/layout/Body/WebSites'
import Contado from '@/components/layout/Body/Contado'
import ExibeConteudo from '@/components/layout/Body/ExibeConteudo'
import Home from '@/components/layout/Body/Home'
import Quiz from '@/components/layout/Body/Quiz'
import Error404 from '@/components/layout/Error/404'
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
          path: '/portifolio/android',
          name: 'home.android',
          component: Android
        },
        {
          path: '/error/404',
          name: 'home.error404',
          component: Error404
        },

        {
          path: '/portifolio/:diretorio/:id',
          name: 'home.exibeconteudo',
          component: ExibeConteudo,
          props: true
        },
        {
          path: '/portifolio/websites',
          name: 'home.websites',
          component: WebSites
        },
        {
          path: '/post/:titulo',
          name: 'home.post',
          component: Post,
          props: true
        },
        {
          path: '/question/:id',
          name: 'home.question',
          component: Quiz
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
