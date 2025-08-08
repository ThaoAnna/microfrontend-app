<template>
  <iframe 
  src="http://localhost:5180/" 
  width="100%" 
  height="100%" 
  style="border-radius: 5px;"
  ></iframe>
</template>

<script setup>
import { ref } from 'vue'

// Define the event to emit
const emit = defineEmits(['toggle-theme'])

const toggleTheme = () => {
  emit('toggle-theme', "component2") // 🔥 Emit to parent
}

</script>



