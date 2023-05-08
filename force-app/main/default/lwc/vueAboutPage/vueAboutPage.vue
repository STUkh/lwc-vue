<template>
    <div>
      <h1>Home</h1>
      <p>Date Num: {{ aboutStore.date }}</p>
      <button @click="aboutStore.getDate">Get Date Number</button>
    </div>
</template>
  
<script>
  import { useDateStore } from 'c/store';
  
  export default {
    setup() {
      const aboutStore = useDateStore();
      return { aboutStore }
    }
  }
</script>

<style scoped>
  .test1 {
    color: red;
  }
</style>