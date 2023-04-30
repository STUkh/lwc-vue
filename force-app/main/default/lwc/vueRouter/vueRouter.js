import { createRouter, createWebHashHistory } from './vueRouterLib.js';

import TestComponent from 'c/test';
import Home from 'c/vueHomePage';
import About from 'c/vueAboutPage';
import Contact from 'c/vueContactPage';

console.log(Contact)

// Define Vue routes here
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/test', name: 'Test', component: TestComponent },
]

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export * as VueRouter from './vueRouterLib.js';