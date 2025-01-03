<template>
    <div>
        <NavBar />
        <div class="mt-32   space-y-3 lg:flex ">
            <!-- CAR SIDE BAR -->
            <CarSideBar />
            <!-- CAR SIDE BAR -->

            <NuxtPage />
            <!-- <CarCards /> -->
        </div>
    </div>
</template>

<script setup>
const { titleCase } = useUtilities()
definePageMeta({
    layout: 'laith',
})

const route = useRoute();


useHead({
    title: `${route.params.make ? titleCase(route.params.make) : 'Cars '} in ${titleCase(route.params.city)}`
})



</script>