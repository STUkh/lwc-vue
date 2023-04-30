import { createApp } from 'c/vueLib';
import router from './vue-router.js';
import VueAppComponent from 'c/vueApp';

const vueApp = createApp(VueAppComponent);

vueApp.use(router);

export default vueApp;