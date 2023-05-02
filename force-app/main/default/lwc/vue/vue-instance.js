import { createApp } from 'c/vueLib';
import { setupStore } from 'c/vueStore';
import { router } from 'c/vueRouter';
import VueAppComponent from 'c/vueApp';

const vueApp = createApp(VueAppComponent);

// Init other Vue plugins here
vueApp.use(router);
vueApp.use(setupStore());

export default vueApp;