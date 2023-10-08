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
    name: 'pinturas',
    component: function () {
      return import('../views/Pinturas.vue')
    }
  },
  {
    path: '/modelado3d',
    name: 'modelado3d',
    component: function () {
      return import('../views/Modelado3d.vue')
    }
  },
  {
    path: '/carpinteria',
    name: 'carpinteria',
    component: function () {
      return import('../views/Carpinteria.vue')
    }
  },
  {
    path: '/metales',
    name: 'metales',
    component: function () {
      return import('../views/metales.vue')
    }
  },
  {
    path: '/obras',
    name: 'obras',
    component: function () {
      return import('../views/Obras.vue')
    }
  },
  {
    path: '/revestimientos',
    name: 'revestimientos',
    component: function () {
      return import('../views/Revestimientos.vue')
    }
  },
  {
    path: '/aluminios',
    name: 'aluminios',
    component: function () {
      return import('../views/Aluminios.vue')
    }
  },
    {
    path: '/apvista',
    name: 'apvista',
    component: function () {
      return import('../views/ApVista.vue')
    }
  },
  {
    path: '/electricidad',
    name: 'electricidad',
    component: function () {
      return import('../views/Electricidad.vue')
    }
  },
  {
    path: '/plomeria',
    name: 'plomeria',
    component: function () {
      return import('../views/Plomeria.vue')
    }
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: function () {
      return import('../views/Galeria.vue');
    },
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
