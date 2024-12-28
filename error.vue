<template>
    <div class="m-5 p-6 bg-zinc-500 text-center tracking-wide border leading-6 rounded-lg shadow-lg text-white">
        <h1 class="text-4xl font-bold mb-4">{{ 'Oops!' || error.statusCode }}</h1>
        <p class="text-lg mb-6">
            {{ 'Sorry, the page you are looking for does not exist. ' || error.message }}
        </p>
        <div class="flex justify-center space-x-4">
            <button @click="goHome"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                Go to Home
            </button>
            <button @click="reloadPage"
                class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                Retry
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    error: {
        type: Object,
        required: true,
    },
});

const goHome = () => {
    window.location.href = '/';
};

const reloadPage = () => {
    window.location.reload();
};
</script>

<style scoped>
/* Add a gradient background for a modern look */
div {
    background: linear-gradient(145deg, #4a5568, #2d3748);
    color: #ffffff;
}
</style>