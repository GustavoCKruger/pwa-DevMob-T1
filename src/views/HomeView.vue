<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import ProdutosList from '@/components/ProdutosList.vue'
import ProductDetail from '@/components/ProductDetail.vue';


</script>

<template>
  <div id="app">
    <!-- Navbar -->
    <NavBar></NavBar>
    <!-- Lista de Produtos -->
    <ProdutosList />
    <!-- Rodapé -->
    <FooterBar />
  </div>
</template>

<style scoped>

</style>
