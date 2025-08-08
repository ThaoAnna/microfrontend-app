<template>
  <div class="app-container">
    <main class="main-content">
      <ComponentTwo @toggle-theme="alertFunction"/>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ComponentTwo from './components/ComponentTwo.vue';

const appTitle = ref("VueApp");
const isLoggedIn = ref(false);

const alertFunction = (data) => {
  console.log(data)
  alert("Here is an alert for " + data)
}
</script>

<style>

</style>