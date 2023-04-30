import { createRouter, createWebHashHistory } from './vueRouterLib.js';
import TestComponent from 'c/test';

export * as VueRouter from './vueRouterLib.js';

const Home = { render: () => 'Home' };
const About = TestComponent;

// Define Vue routes here
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});