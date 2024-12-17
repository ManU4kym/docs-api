<template>
    <div class="bg-[url('assets/images/lava.jpg')] bg-cover bg-center h-screen-full md:h-screen-full text-white font-light">
        <header class="justify-between py-6 px-9 flex shadow-lg shadow-black    mx-auto  ">
            <NuxtLink to="/" class="logo py-0 text-sm md:text-lg">Kimmiy</NuxtLink>

            <nav class="grid grid-cols-4  gap-1 px-7 md:flex md:gap-4 text-sm md:text-base">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/events">About</NuxtLink>
                <NuxtLink to="/events/id">Work</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </nav>
        </header>
        <main>

            <slot />
        </main>
    </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
    color: #f9f9f9;
}
</style>