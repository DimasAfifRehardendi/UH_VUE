import Vue from 'vue'
import VueRouter from 'vue-router'
import Beranda from '../views/Beranda.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import Footer from '../views/layouts/Footer.vue'
import Dakan from '../views/Data_Kantin.vue'
import Dama from '../views/Data_Makan.vue'
import Pem from '../views/Pembelian.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'beranda',
    components: {
      default: Beranda, header: Navbar, sidebar : Sidebar, footer: Footer 
    }
  },
  {
    path: '/datakantin',
    name: 'datakantin',
    components: {
      default: Dakan, header: Navbar, sidebar : Sidebar, footer: Footer 
    }
  },
  {
    path: '/datamakan',
    name: 'datamakan',
    components: {
      default: Dama, header: Navbar, sidebar : Sidebar, footer: Footer 
    }
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {
      default: Pem, header: Navbar, sidebar : Sidebar, footer: Footer 
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
