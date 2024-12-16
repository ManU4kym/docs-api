<!-- <script setup>
const nuxt = useNuxtApp();
console.log(nuxt);
nuxt.provide('nation', (name) => `Hello ${name}!`);
console.log(nuxt.$nation('immanuel'));
</script> -->
<script setup>
const id = useRoute().params.id;

const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri);
</script>
<template>
    <div class="p-6 leading-9 tracking-wider  text-sm m-8 shadow-red-500 shadow-2xl md:w-1/4">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>

</template>