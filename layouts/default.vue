<template>
    <div class="bg-[url('assets/images/lava.jpg')] bg-cover bg-center h-screen md:h-screen text-white font-light">
        <header class="justify-between py-6 px-9 flex shadow-lg shadow-black    mx-auto  ">
            <NuxtLink to="/" class="logo py-0 text-sm md:text-lg">Kimmiy</NuxtLink>

            <nav class="grid grid-cols-4  gap-1 px-7 md:flex md:gap-4 text-sm md:text-base">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/events">Product</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </nav>
        </header>
        <main>

            <slot />
        </main>

        <footer class="fixed bottom-0 left-0 w-full bg-zinc-800 text-white text-center p-4">
            Contact
        </footer>

    </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
    color: #f9f9f9;
}
</style>