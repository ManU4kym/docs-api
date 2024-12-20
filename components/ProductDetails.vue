<template>
    <div>
        <div class="img m-7">
            <img :src="product.image" class="float-left h-96" />
        </div>
        <div class="p-8 m-6 float-right border-6  w-1/2">
            <p> Title :{{ product.title }}</p>
            <p>Price : {{ product.price }}</p>
            <p>Identifier :{{ product.id }}</p>
            <h2 class="border-b-2 w-1/2 font-bold text-center">Product Details</h2>
            <p class="leading-6 tracking-wider m-4">{{ product.description }}</p>
        </div>
    </div>
</template>

<script setup>

const { product } = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.img {
    width: 34%;
}
</style>