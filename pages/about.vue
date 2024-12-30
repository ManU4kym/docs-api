<template>
  <div>
    <h1 class="text-2xl text-pink-400 font-bold leading-4 tracking-wide m-8 p-7">This right here is the about page {{
      message }} </h1>

  </div>
</template>

<script setup>

const { data: message } = await useFetch('/api/kim?name=john', {
  method: 'POST',
  body: {
    age: 30,
  }
});



</script>

<style scoped>
/* Styles here */
</style>