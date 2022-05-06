import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/hello',
    name: 'helloworld',
    component: () => import('@/components/helloworld'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
