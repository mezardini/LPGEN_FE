import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Generate from '../components/Generate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generate',
    name: 'Generate',
    component: Generate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
