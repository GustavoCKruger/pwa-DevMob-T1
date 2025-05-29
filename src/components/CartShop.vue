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
     <div class="cart-container">
        <h1>Meu Carrinho</h1>

        <div v-if="cart.length > 0">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço unitário</th>
                        <th>Subtotal</th>
                        <th>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cart" :key="item.id">
                        <td data-label="Produto">
                            <img :src="item.image" alt="Produto" />
                            {{ item.title }}
                        </td>
                        <td data-label="Quantidade">
                            <button class="quanty-button" @click="decreaseQuantity(item)">−</button>
                            {{ item.quantity }}
                            <button class="quanty-button" @click="increaseQuantity(item)">+</button>
                        </td>
                        <td data-label="Preço unitário">{{ item.price }}</td>
                        <td data-label="Subtotal">{{ formatPrice(parsePrice(item.price) * item.quantity) }}</td>
                        <td data-label="Remover">
                            <button class="remove-button" @click="removeItem(item.id)">Remover</button>
                        </td>
                    </tr>
                </tbody>

            </table>

            <h2>Total: {{ formatPrice(totalPrice()) }}</h2>
            <button style="margin: 5px" class="button" @click="confirmBuy">Buy Now</button>

        </div>

        <div v-else>
            <p>Seu carrinho está vazio.</p>
        </div>

    </div>
</template>