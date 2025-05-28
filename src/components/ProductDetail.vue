<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
const route = useRoute()
const product = ref(null)
const quantity = ref(1)

const products = ref([
  {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    image: '../src/assets/images/image1.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 2,
    title: 'Produto 2',
    description: 'Descrição do Produto 2',
    image: '../src/assets/images/image2.png',
    inStock: 5,
    price: 'R$100,00',
  },
  {
    id: 3,
    title: 'Produto 3',
    description: 'Descrição do Produto 3',
    image: '../src/assets/images/image3.png',
    inStock: 0,
    price: 'R$100,00',
  },
  {
    id: 4,
    title: 'Produto 4',
    description: 'Descrição do Produto 4',
    image: '../src/assets/images/image4.png',
    inStock: 3,
    price: 'R$100,00',
  },
  {
    id: 5,
    title: 'Produto 5',
    description: 'Descrição do Produto 5',
    image: '../src/assets/images/image5.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 6,
    title: 'Produto 6',
    description: 'Descrição do Produto 6',
    image: '../src/assets/images/image6.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 7,
    title: 'Produto 7',
    description: 'Descrição do Produto 7',
    image: '../src/assets/images/image7.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 8,
    title: 'Produto 8',
    description: 'Descrição do Produto 8',
    image: '../src/assets/images/image8.jpeg',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 9,
    title: 'Produto 9',
    description: 'Descrição do Produto 9',
    image: '../src/assets/images/image9.jpeg',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 10,
    title: 'Produto 10',
    description: 'Descrição do Produto 10',
    image: '../src/assets/images/image10.jpeg',
    inStock: 10,
    price: 'R$100,00',
  },
])

const getProductById = (id) => {
  return allProducts.find((product) => product.id === id)
}

const addToCart = () => {
const productToAdd = {
  id: product.value.id,
  title: product.value.title,
  image: product.value.image,
  price: product.value.price,
}
  cartStore.addToCart(productToAdd, quantity.value)
  alert('Produto adicionado ao carrinho 🛒✅!')
}

const confirmBuy = () => {
  alert('Compra concluída com sucesso ✅!')
}

const loadProduct = () => {
  const id = parseInt(route.params.id)
  if (id) {
    product.value = getProductById(id)
  }
}

const aumentar = () => {
  if (product.value && quantity.value < product.value.inStock) {
    quantity.value++
  }
}

const diminuir = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

onMounted(() => {
  loadProduct()
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