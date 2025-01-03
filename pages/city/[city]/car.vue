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

definePageMeta({
    layout: 'laith',
})

const route = useRoute();


useHead({
    title: `${route.params.make ? titleCase(route.params.make) : 'Cars '} in ${titleCase(route.params.city)}`
})


function titleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();
        }
    );
}
</script>