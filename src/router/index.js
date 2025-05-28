import { createRouter, createWebHistory } from 'vue-router'
import ProdutosView from '@/views/ProdutosView.vue'
import CartView from '@/views/CartView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: ProdutosView,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
  ],
})

export default router
