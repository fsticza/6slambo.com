import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IcoMarketing from '@/components/IcoMarketing'

Vue.use(Router)

const routes = [
  { path: '/', component: Index },
  { path: '/ico-marketing', component: IcoMarketing }
]

const router = new Router({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router