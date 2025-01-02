<template>
    <div>
        <NavBar />

        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <div class="mt-32 flex">
                <!-- CAR SIDE BAR -->
                <CarSideBar />
                <!-- CAR SIDE BAR -->

                <NuxtPage />
                <!-- <CarCards /> -->
            </div>
        </div>
    </div>
</template>

<script setup>

const route = useRoute();


    useHead({
        title: `${route.params.make ? titleCase(route.params.make) : 'Cars '} in ${titleCase(route.params.city)}`
    })


    function titleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();
            }
        );
    }
</script>