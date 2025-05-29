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
                            <img :src="item.image" alt="Produto" class="cart-image" />
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

<style scoped>
    .cart-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #e74c3c;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(192, 57, 43, 0.2);
}

.cart-container h1 {
  font-size: 28px;
  text-align: center;
  color: #c0392b;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

thead {
  background-color: #e74c3c;
  color: #fff;
}

th,
td {
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
}

td[data-label] {
  font-size: 14px;
  color: #333;
}

.cart-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-right: 10px;
  vertical-align: middle;
}

.quanty-button {
  padding: 6px 10px;
  margin: 0 5px;
  font-size: 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quanty-button:hover {
  background-color: #c0392b;
}

.remove-button {
  background-color: #f5b7b1;
  color: #a93226;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #f1948a;
}

.button {
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  margin: 0 auto;
}

.button:hover {
  background-color: #c0392b;
}

.cart-container h2 {
  text-align: right;
  color: #c0392b;
  margin-top: 10px;
}

@media (max-width: 768px) {
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }

  td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    width: 45%;
    white-space: nowrap;
    font-weight: bold;
    color: #c0392b;
    text-align: left;
  }

  .button {
    width: 100%;
    margin-top: 20px;
  }
}

</style>

