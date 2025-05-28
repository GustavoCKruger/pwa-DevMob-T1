<script setup>
import { watch, onMounted, computed } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

onMounted(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
        const parsed = JSON.parse(storedCart)
        parsed.forEach(item => {
            cartStore.addToCart(item, item.quantity)
        })
    }
})

watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
}, { deep: true })

const removeItem = (id) => {
    cartStore.removeFromCart(id)
}

const increaseQuantity = (item) => {
    item.quantity++
}

const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
        item.quantity--
    }
}

const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.')) || 0
}

const totalPrice = () => {
    return cart.value.reduce((acc, item) => {
        return acc + parsePrice(item.price) * item.quantity
    }, 0)
}

const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const confirmBuy = () => {
    if (cartStore.cart.length === 0) {
        alert('Seu carrinho está vazio.')
        return
    }

    alert('Compra realizada com sucesso! ✅')
    cartStore.clearCart()
}
</script>

<template>
<CartShop />
</template>

<style scoped></style> 
