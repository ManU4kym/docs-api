<template>
  <div class="product p-7">
    <h1>{{ name || 'Vendor' }}</h1>
    <div>
      <div class="grid grid-cols-1 gap-5 m-8 sm:grid-cols-2 md:grid-cols-5 shadow-lg border p-5 tracking-normal">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "../../components/ProductCard.vue";

const { data: products } = await useFetch("https://fakestoreapi.com/products");


const name = ref("Vendor");

useHead({
  title: 'Merchendise',
  meta: [
    { name: 'viewport', content: 'Our products' },

  ],
})
</script>


<style scoped>
.product {
  min-height: 100vh;
  background: url('/assets/images/lava.jpg');
  background-size: cover;
}

.content {
  padding: 2rem;
}
</style>
