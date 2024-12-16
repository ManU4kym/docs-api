<template>
    <div class="card text-center">
        <img :src="product.image || '/placeholder.png'" alt="img product" class="thumb" />
        <p class="font-bold text-white m-4 truncate">{{ product.title }}</p>
        <nuxt-link :to="`/events/${product.id}`" class="hover:text-orange-950">
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