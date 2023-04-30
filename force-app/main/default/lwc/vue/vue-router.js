import * as VueRouter from 'c/vueRouter';

import TestComponent from 'c/test';

const Home = { render: () => 'Home' };
const About = TestComponent;

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;