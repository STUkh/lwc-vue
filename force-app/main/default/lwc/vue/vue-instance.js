import { createApp } from 'c/vueLib';
import { router } from 'c/vueRouter';
import VueAppComponent from 'c/vueApp';

const vueApp = createApp(VueAppComponent);

// Init other Vue plugins here
vueApp.use(router);

export default vueApp;