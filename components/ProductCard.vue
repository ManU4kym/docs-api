<template>
    <div class="kardi relative m-8 p-8">
        <img :src="product.image || '/placeholder.png'" alt="img product" class=" object-contain w-1/2 h-full" />
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
<style scoped>
.kardi {
    height: 372px;
    background-color: white;
    box-sizing: border-box;

}

.kardi p {
    color: black
}

.kardi button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.kardi img {
    width: 100%;
    height: auto;
}
</style>