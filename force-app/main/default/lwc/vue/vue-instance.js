import { createApp } from 'c/vueLib';
import { pinia } from 'c/store';
import { router } from 'c/vueRouter';
import VueAppComponent from 'c/vueApp';

const vueApp = createApp(VueAppComponent);

// Init other Vue plugins here
vueApp.use(router);
vueApp.use(pinia);

export default vueApp;