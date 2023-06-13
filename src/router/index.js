import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjects from '../views/AddProjects.vue'
import EditProjects from '../views/EditProjects.vue'
import International from '../views/International.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'AddProjects',
    component: AddProjects
  },
  {
    path: '/international',
    name: 'International',
    component: International
  },
  {
    path: '/projects/:id',
    name: 'EditProjects',
    component: EditProjects,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
