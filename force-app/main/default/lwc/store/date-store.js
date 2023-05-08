import { defineStore } from 'c/pinia';

export default defineStore({
  id: 'dateStore',
  state: () => ({
    date: 0
  }),
  actions: {
    getDate() {
      this.date = + new Date();
    }
  }
});
