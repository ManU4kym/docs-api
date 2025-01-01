<template>
  <div class=" border m-12 p-16 bg-gradient-to-tr from-yellow-900 to-slate-900 text-white  rounded-md font-sans  text-center justify-center">
    <h1>{{ errorCode }}</h1>
    <p>{{ errorMessage }}</p>

    <button class="m-7 p-4 bg-orange-400 rounded-md hover:bg-green-700"><router-link to="/">Go back</router-link></button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['error']);
const errorCode = computed(() =>props.error.code);
const errorMessage = computed(() => props.error.message);
</script>

