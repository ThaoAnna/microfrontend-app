<template>
  <div class="component-card">
    <h2>Component 2 </h2>
    <!-- <p>{{ dynamicMessage }}</p> -->
    <div class="counter-section">
      <button class="btn" @click="toggleTheme">Emit Button 2</button>
    </div>
    <ul class="feature-list">
      <li>Dynamic content updates</li>
      <li>Component communication</li>
      <li>Responsive design patterns</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define the event to emit
const emit = defineEmits(['toggle-theme'])

const toggleTheme = () => {
  emit('toggle-theme', "component2") // 🔥 Emit to parent
}

</script>



