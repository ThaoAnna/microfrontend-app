<template>
  <div class="component-card">
    <h2>Component 1 </h2>
    <div class="counter-section">
      <div class="counter-display">{{ count }}</div>
      <button class="btn" @click="emmitButton">Emit Button 1</button>
      
    </div>
    <ul class="feature-list">
      <li>Reactive state management</li>
      <li>Smooth hover animations</li>
      <li>Modern glassmorphism design</li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue'

// Define the event to emit
const emit = defineEmits(['emit-button'])

const emmitButton = () => {
  emit('emit-button', "component1") // 🔥 Emit to parent
}

</script>