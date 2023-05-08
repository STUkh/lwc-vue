import { defineStore } from 'c/pinia';

export default defineStore('counter', {
    state: () => ({
      count: 5
    }),
    actions: {
      increment() {
        this.count++;
      },
      decrement() {
        this.count--;
      },
    },
});
