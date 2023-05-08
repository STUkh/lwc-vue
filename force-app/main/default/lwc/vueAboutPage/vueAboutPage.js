
  import { useDateStore } from 'c/store';
  
  import { render } from './vueAboutPage-template.js';

export default {
  render,

    setup() {
      const aboutStore = useDateStore();
      return { aboutStore }
    }
  }
