
import { ref } from 'c/vueLib';

import { render } from './test-template.js';

export default {
  render,

  setup() {
    const message = ref('Hello, Vue SFC!');

    function handleButtonClick() {
      message.value = 'You clicked the button!';
    }

    return {
      message,
      handleButtonClick,
    };
  },
};
