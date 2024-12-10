<template>
    <div ref="threeContainer" style="width: 100%; height: 100%"></div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useThree } from '~/composables/useThree';
  
  const threeContainer = ref(null);
  const { init, cleanup } = useThree();
  
  onMounted(() => {
    // Ensure code runs only after the component is mounted in the client-side environment
    if (threeContainer.value) {
      init(threeContainer.value);
    }
  });
  
  onUnmounted(() => {
    cleanup();
  });
  </script>
  
  <style scoped>
  div {
    display: block;
  }
  </style>
  