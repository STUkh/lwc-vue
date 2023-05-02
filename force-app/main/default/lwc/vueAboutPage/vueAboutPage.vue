<template>
    <div>
      <h1>Home</h1>
      <p>Counter: {{ counter.count }}</p>
      <button @click="counter.increment">Increment</button>
    </div>
</template>
  
<script>
  import { useCounterStore } from './store.js';
  
  export default {
    setup() {
      const counter = useCounterStore();
      return { counter }
    }
  }
</script>

<style scoped>
  .test1 {
    color: red;
  }
</style>