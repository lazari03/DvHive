import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import DiminishedValue from './DiminishedValue.vue'
import Pricing from './Pricing.vue'
import FAQ from './FAQ.vue'
import Contact from './Contact.vue'
import IntakeForm from './IntakeForm.vue'
import PrivacyPolicy from './PrivacyPolicy.vue'
import TermsOfUse from './TermsOfUse.vue'
import Blog from './Blog.vue'
import BlogPost from './BlogPost.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/diminished-value', component: DiminishedValue },
  { path: '/pricing', component: Pricing },
  { path: '/faq', component: FAQ },
  { path: '/contact', component: Contact },
  { path: '/intake-form', component: IntakeForm },
  { path: '/privacy-policy', component: PrivacyPolicy },
  { path: '/terms-of-use', component: TermsOfUse },
  { path: '/blog', component: Blog},
  { path: '/blog/:slug', component: BlogPost},
]

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { top: 0 }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router
