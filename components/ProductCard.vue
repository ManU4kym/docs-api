<template>
    <div class="card text-center">
        <img :src="product.image || '/placeholder.png'" alt="img product" class=" object-cover w-1/2 h-1/2" />
        <p class="font-bold text-white m-4 truncate">{{ product.title }}</p>
        <nuxt-link :to="`/events/${product.id}`" class="hover:text-purple hover:font-bold">
            <button>View details</button>
        </nuxt-link>
    </div>
</template>

<script setup>
const { product } = defineProps({
    product: {
        type: Object,
        required: true,
    },
});
</script>
