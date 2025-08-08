<template>
  <div class="app-container">
    <!-- <header class="header">
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon">V</div>
          <div class="logo-text">{{ appTitle }}</div>
        </div>
        <div class="auth-buttons">
          <button v-if="!isLoggedIn" class="auth-btn login" @click="isLoggedIn = true">Log In</button>
          <button v-if="isLoggedIn" class="auth-btn logout" @click="isLoggedIn = false">Log Out</button>
        </div>
      </div>
    </header> -->

    <main class="main-content">
      <!-- <ComponentOne @emit-button="alertFunction"/> -->
      <ComponentTwo @toggle-theme="alertFunction"/>
    </main>

    <!-- <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <h3>TechCorp Solutions</h3>
          <p>📧 contact@techcorp.com</p>
          <p>📍 123 Innovation Street</p>
          <p>📞 +1 (555) 123-4567</p>
        </div>
        <div class="footer-right">
          <div class="footer-section">
            <h3>Services</h3>
            <a href="#">Web Dev</a>
            <a href="#">Mobile Apps</a>
          </div>
          <div class="footer-section">
            <h3>Info</h3>
            <a href="#">About</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import ComponentOne from './components/ComponentOne.vue';
import ComponentTwo from './components/ComponentTwo.vue';

const appTitle = ref("VueApp");
const isLoggedIn = ref(false);

const alertFunction = (data) => {
  console.log(data)
  alert("Here is an alert for " + data)
}
</script>

<style>
/* Copy your entire CSS from the original <style> block */
</style>
