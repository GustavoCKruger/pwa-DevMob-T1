<script setup>
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
</script>

<template>
    <router-link to="/cart">
        <div class="cart">
            <img src="@/assets/images/shopping-cart.png" alt="Carrinho" class="icon-cart" />
            <span>{{ cartStore.totalItems }}</span>
        </div>
    </router-link>
</template>