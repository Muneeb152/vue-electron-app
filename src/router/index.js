import { createRouter, createWebHistory } from 'vue-router';

// Import your views or components for routing
// import Home from '../com/Home.vue';
// import About from '../views/About.vue';
 import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: About,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;