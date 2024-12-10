<template>
    <div ref="threeContainer" style="width: 100%; height: 100%"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useThree } from '~/composables/useThree';
  

  const threeContainer = ref(null);
  
  const { init } = useThree();
  
  onMounted(() => {
    if (threeContainer.value) {
      init(threeContainer.value);
    }
  });
  </script>
  
  <style scoped>
  div {
    display: block;
  }
  </style>
  