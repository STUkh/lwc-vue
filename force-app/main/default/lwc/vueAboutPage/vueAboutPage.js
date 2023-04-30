
  import { useCounterStore } from './store.js';
  
  import { render } from './vueAboutPage-template.js';

export default {
  render,

    setup() {
      const counter = useCounterStore();
      return { counter }
    }
  }
