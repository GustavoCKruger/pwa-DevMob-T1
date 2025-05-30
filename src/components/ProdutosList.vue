<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
const router = useRouter()

const addCart = (product) => {
  const productAdd = {
    id: product.id,
    title: product.title,
    description: product.description,
    image: product.image,
    inStock: product.inStock,
    price: product.price
  }

  cartStore.addCart(productAdd, 1)
  alert(`Produto adicionado no carrinho`)
}


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

const goToDetails = (id) => {
    router.push({ name: 'details', params: { id } })
}
</script>

<template>
  <div id="container">
    <div class="product-display">
      <div class="product-container" v-for="product in products" :key="product.id">
        <a style="text-decoration: none" @click="goToDetails(product.id)">
          <div class="product-image">
            <img :src="getImage(product.image)" :alt="product.title" />
          </div>
          <div class="product-info">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <p>{{ product.price }}</p>
          </div>
        </a>
        <p v-if="product.inStock >= 10">In Stock</p>
        <p v-else-if="product.inStock < 10 && product.inStock > 1">Almost out of stock</p>
        <p v-else>Out of stock</p>
        <button
          class="button"
          :class="{ disabledButton: product.inStock < 1 }"
          @click="addCart(product)"
          :disabled="product.inStock < 1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70px;
  row-gap: 40px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}

.product-container {
  background: #fff;
  border: 2px solid #e74c3c;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(192, 57, 43, 0.2);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  height: 500px;
}

.product-container:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(192, 57, 43, 0.4);
}

.product-image img {
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: contain;
  border-radius: 0;
}

.product-info {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info h1 {
  font-size: 18px;
  color: #c0392b;
  margin-bottom: 8px;
}

.product-info p {
  font-size: 14px;
  margin-bottom: 8px;
  color: #800000;
}

.button {
  padding: 10px;
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

@media (max-width: 1000px) {
  .product-display {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-display {
    grid-template-columns: 1fr;
  }

  .container-nav {
    display: grid;
    grid-template-columns: 30% 40% 1fr;
    height: auto;
  }

  .container-nav img {
    margin-bottom: 10px;
  }

  .container-nav a {
    font-size: 15px !important;
    margin-top: 4px;
    margin-left: 10%;
  }

  .container-nav .img {
    height: 70px;
    margin-top: 3%;
    margin-bottom: 0;
  }

  .container-footer {
    flex-direction: column;
  }

  .container-footer #img {
    margin: 0;
    height: 90%;
    padding: 0;
  }

  h4 {
    margin-top: 0;
  }

  .cart-img {
    height: 30px;
    margin-left: 44%;
  }

  .cart-item {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
  }

  .img-in-cart {
    width: 80%;
    margin: auto;
  }

  .item-cart-title,
  .item-descricao,
  .item-quantidade {
    width: 90%;
    font-size: 16px;
  }

  .button-cart {
    width: 60%;
    margin: 10px auto;
    font-size: 14px;
  }

  #container h1 {
    font-size: 24px;
    text-align: center;
    margin: 20px;
  }

  .button {
    width: 80%;
    margin: auto;
    display: block;
  }
}
</style>
