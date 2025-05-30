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
    image: 'image1.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 2,
    title: 'Produto 2',
    description: 'Descrição do Produto 2',
    image: 'image2.png',
    inStock: 5,
    price: 'R$100,00',
  },
  {
    id: 3,
    title: 'Produto 3',
    description: 'Descrição do Produto 3',
    image: 'image3.png',
    inStock: 0,
    price: 'R$100,00',
  },
  {
    id: 4,
    title: 'Produto 4',
    description: 'Descrição do Produto 4',
    image: 'image4.png',
    inStock: 3,
    price: 'R$100,00',
  },
  {
    id: 5,
    title: 'Produto 5',
    description: 'Descrição do Produto 5',
    image: 'image5.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 6,
    title: 'Produto 6',
    description: 'Descrição do Produto 6',
    image: 'image6.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 7,
    title: 'Produto 7',
    description: 'Descrição do Produto 7',
    image: 'image7.png',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 8,
    title: 'Produto 8',
    description: 'Descrição do Produto 8',
    image: 'image8.jpeg',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 9,
    title: 'Produto 9',
    description: 'Descrição do Produto 9',
    image: 'image9.jpeg',
    inStock: 10,
    price: 'R$100,00',
  },
  {
    id: 10,
    title: 'Produto 10',
    description: 'Descrição do Produto 10',
    image: 'image10.jpeg',
    inStock: 10,
    price: 'R$100,00',
  },
])

const getImage = (img) =>
  new URL(`../assets/images/${img}`, import.meta.url).href

const getProductById = (id) => {
  return products.value.find((product) => product.id === id)
}

const addCart = () => {
const productToAdd = {
  id: product.value.id,
  title: product.value.title,
  image: product.value.image,
  price: product.value.price,
}
  cartStore.addCart(productToAdd, quantity.value)
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
 <div v-if="product" class="details-product">
    <img :src="getImage(product.image)" alt="Produto" class="details-img" />
    <div class="details-items">
      <h1 class="details-name">{{ product.title }}</h1>
      <p class="details-price">{{ product.price }}</p>
      <div class="quantity-control">
        <span>Quantidade</span>
        <button class="quantity-button" @click="diminuir" :disabled="quantity <= 0">−</button>
        <span class="quantity-value">{{ quantity }}</span>
        <button class="quantity-button" @click="aumentar" :disabled="quantity >= product.inStock">+</button>
      </div>
      <div class="container-button">
        <button
          class="button"
          style="margin: 5px"
          :class="{ disabledButton: product.inStock < 1 }"
          @click="addCart(product)"
          :disabled="product.inStock < 1"
        >
          <img
          
            alt="cart"
          />
        </button>
        <button style="margin: 5px" class="button" @click="confirmBuy">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details-product {
  max-width: 550px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border: 2px solid #e74c3c;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(192, 57, 43, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  margin: 20px 0;
  border-radius: 8px;
}

.details-items {
  width: 100%;
  text-align: center;
}

.details-name {
  font-size: 24px;
  color: #c0392b;
  margin-bottom: 10px;
}

.details-price {
  font-size: 20px;
  color: #800000;
  margin-bottom: 20px;
}

.quantity-control {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.quantity-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 18px;
}

.quantity-button:disabled {
  background-color: #f5b7b1;
  cursor: not-allowed;
}

.quantity-value {
  font-size: 18px;
  font-weight: bold;
  min-width: 24px;
  text-align: center;
}

.container-button {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.button {
  padding: 10px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #c0392b;
}

.disabledButton {
  background-color: #f5b7b1;
  cursor: not-allowed;
}

  .details-name {
    font-size: 20px;
  }

  .details-price {
    font-size: 18px;
  }

  .quantity-button {
    padding: 6px 10px;
    font-size: 16px;
  }

  .button {
    width: 80%;
  }
</style>
