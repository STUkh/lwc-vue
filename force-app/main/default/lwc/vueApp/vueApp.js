
import { ref, reactive, onMounted, inject } from 'c/vueLib';

import { render } from './vueApp-template.js';

export default {
  render,

  setup() {
    const $lwc = inject('$vueEl');
    const items = reactive([{id: 'id-1', 'title': 'first'}, {id: 'id-2', 'title': 'second'}]);
    const title = ref($lwc.title);
    const name = ref('Vue!');

    function triggerEvent(event, ...args) {
      console.log('Example of template arguments: ', event, args);
      $lwc.dispatchEvent(new CustomEvent("sendaccount", {
        detail: { accountId: `testAcc${Number(new Date())}` },
        bubbles: true,
        composed: true
      }));
    }

    onMounted(() => {
      $lwc.dispatchEvent(new CustomEvent("vueinit", {
        detail: { title },
        bubbles: true,
        composed: true
      }));
    });

    return {
      items,
      title,
      name,
      triggerEvent,
    };
  },
};
