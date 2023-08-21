import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/registro',
    name: 'registro',
    component: function () {
      return import('../views/registro.vue')
    }
  },
  {
    path: '/pinturas',
    name: 'Pinturas',
    component: function () {
      return import('../views/Pinturas.vue')
    }
  },
  {
    path: '/proyectos/:id',
    name: 'proyectos',
    component: function () {
      return import('../views/proyectos.vue')
    }
  },
  {
    path: '/proyectos3d/:id',
    name: 'proyectos3d',
    component: function () {
      return import('../views/proyectos3d.vue');
    },
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
