import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Programmation from '../views/Programmation.vue'
import Artiste from '../views/Artiste.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Programmation', name: 'Programmation', component: Programmation },
    { path: '/Artiste', name: 'Artiste', component: Artiste },
    // ici les autre routes
  ]
})

export default router
