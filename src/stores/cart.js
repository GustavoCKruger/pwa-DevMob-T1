import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  const addCart = (product, quantity = 1) => {
    const item = cart.value.find(p => p.id === product.id)
    if (item) {
      item.quantity += quantity
    } else {
      cart.value.push({ ...product, quantity })
    }
  }

  const totalItems = computed(() => {
    return cart.value.reduce((acc, item) => acc + item.quantity, 0)
  })

  function clearCart() {
    cart.value = []
  }

   const removeFromCart = (id) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }

  return {
    cart,
    addCart,
    totalItems,
    clearCart,
    removeFromCart
  }
})