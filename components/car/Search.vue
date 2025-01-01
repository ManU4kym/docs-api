<template>
    <!-- HOME SEARCH BAR -->
    <div
        class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto">
        <input v-model="city" type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            placeholder="Search by city..." :class="cityError ? 'bg-red-600' : ''" />
        <button class="bg-sky-500 px-10 text-white" @click="handleSearch">Search</button>
    </div>
    <!-- HOME SEARCH BAR -->
</template>

<script setup>

const city = ref('');
const router = useRouter();

const cityError = ref(false);






const handleSearch = () => {
    if (city.value) {
        navigateTo(`/city/${city.value}/car`)
    }
    else {

        return cityError.value = true;
    }
};


</script>