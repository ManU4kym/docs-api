<template>
    <div>
        <button @click="count++" class="m-6 p-6 bg-zinc-300 rounded-lg"> {{ count }} </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
/* Styles here */
</style>