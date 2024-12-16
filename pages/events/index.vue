<template>
  <div class="p-7">
    <h1>{{ name || 'Vendor' }}</h1>
    <div>

      <div class="grid grid-cols-1 gap-5 m-8 sm:grid-cols-2 md:grid-cols-5 shadow-lg border p-5  tracking-normal ">
        <div v-for="product in products" :key="product.id" class="tracking-wide leading-6 sm:tracking-normal">
          <nuxt-link :to="`/events/${product.id}`" class="hover:text-orange-950">
            {{ product.title }}
          </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

// State for products and name
const jna = ref([]);
const name = ref("");
// Correct syntax for useFetch
const { data: products } = await useFetch("https://fakestoreapi.com/products");

</script>
