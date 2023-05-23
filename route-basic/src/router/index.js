import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Article from '@/components/Article.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      sub: Article
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/article/:aid',
    name: 'Article',
    component: Article,
    props: routes => ({
      aid: Number(routes.params.aid)
    })
  },
  {
    path: '/:paths(.*)',
    name: 'nothing',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
