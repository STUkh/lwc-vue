<template>
  <div class="example-component">
    <h1>{{ message }}</h1>
    <button @click="handleButtonClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'c/vueLib';

export default {
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
</script>

<style scoped>
.example-component {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #3f51b5;
}

button {
  background-color: #3f51b5;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>