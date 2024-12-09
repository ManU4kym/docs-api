<template>
    <div>
        <title> Nuxt </title>
        <header>
            <nav>
                <ul class="flex justify-center text-green-500 space-x-6 py-6 ">
                    <li class="hover:text-gray-800">

                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="hover:text-gray-800">
                        <NuxtLink to="/events/">Eventura</NuxtLink>
                        <!-- <nuxt-link to="/about">About</nuxt-link> -->
                    </li>
                    <li class="hover:text-red-800">
                        <nuxt-link to="/contact">Contact</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>