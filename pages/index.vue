<template>
  <div class="grid grid cols-1 border p-8 m-7 gap-2 tracking-tighter">
    <div v-for="p in produce" :key="p.id" class=" text-sm ">
      <p>{{ p.id }} : {{ p.title }}</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
<script setup>

const { data: produce } = useFetch("https://fakestoreapi.com/products/")


</script>