<script setup>
import { watch, onMounted, computed } from 'vue'
import NavBar from '@/components/NavBar.vue'
import CartShop from '@/components/CartShop.vue'
import FooterBar from '@/components/FooterBar.vue'
import { useCartStore } from '@/stores/cart'


</script>

<template>
    <NavBar />
    <CartShop />
    <FooterBar />
</template>

<style scoped></style> 
