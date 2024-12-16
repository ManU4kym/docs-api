<!-- <script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template> -->


<template>
  <header class="justify-between py-6 px-9 flex shadow-md shadow-white    mx-auto  ">
    <NuxtLink to="/" class="logo py-0 text-sm md:text-lg">Kimmiy</NuxtLink>

    <nav class="grid grid-cols-4  gap-1 px-7 md:flex md:gap-4 text-sm md:text-base">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/events">About</NuxtLink>
      <NuxtLink to="/events/id">Work</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  color: green;
}
</style>