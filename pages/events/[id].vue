<!-- <script setup>
const nuxt = useNuxtApp();
console.log(nuxt);
nuxt.provide('nation', (name) => `Hello ${name}!`);
console.log(nuxt.$nation('immanuel'));
</script> -->

<template>
    <div
        class="p-6 text-white hover:bg-gradient-to-r from-slate-500  via-purple-500 to-zinc-600 shadow-lg shadow-zinc-800 m-9 rounded-lg bg-slate-500">
        This is your id: {{ $route.params.id }} <br>
        Enter's helma
    </div>
</template>