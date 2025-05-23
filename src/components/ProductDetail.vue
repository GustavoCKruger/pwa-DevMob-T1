<script setup>
const Props = defineProps({
    id: Number,
    title: String,
    description: String,
    image: String,
    inStock: Number,
})
</script>

<template>
  <div class="produto">
    <h1>{{ title }}</h1>
    <a> {{ image }}</a>
  </div>
</template>

<style scoped>

</style>