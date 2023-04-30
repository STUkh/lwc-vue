<template>
    <div>
        <button class="slds-button slds-button_brand"
            @click="(event) => triggerEvent(event, 'whatever')"
        >
            Hello from <strong>{{name}}</strong>
        </button>
    </div>
    <div>Title: {{title}}</div>

    <div v-for="item in items" :key="item.id">
      Repeat {{item.title}}
    </div>

    <p>
      <router-link to="/">Go to Home</router-link> | 
      <router-link to="/about">Go to About</router-link> | 
      <router-link to="/contact">Go to Contact</router-link> | 
      <router-link to="/test">Go to Test</router-link>
    </p>

    <router-view></router-view>
</template>

<script>
import { ref, reactive, onMounted, inject } from 'c/vueLib';

export default {
  setup() {
    const $lwc = inject('$lwc');
    const items = reactive([{id: 'id-1', 'title': 'first'}, {id: 'id-2', 'title': 'second'}]);
    const title = ref($lwc.title);
    const name = ref('Vue!');

    function triggerEvent(event, ...args) {
        console.log(this)
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
</script>