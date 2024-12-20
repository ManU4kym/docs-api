<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>

import ProductDetails from '~/components/ProductDetails.vue';



const id = useRoute().params.id;

const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri);

</script>

<style scoped></style>