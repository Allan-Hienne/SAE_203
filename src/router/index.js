import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Programmation from '../views/Programmation.vue'
import Artiste from '../views/Artiste.vue'
import Festival from '../views/Festival.vue'
import Contact from '../views/Contact.vue'
import page404 from '../views/page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Programmation', name: 'Programmation', component: Programmation },
    { path: '/Artiste', name: 'Artiste', component: Artiste },
    { path: '/Festival', name: 'Festival', component: Festival },
    { path: '/Contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
    // ici les autre routes
  ]
})

export default router
