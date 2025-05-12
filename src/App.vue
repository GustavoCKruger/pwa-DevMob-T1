<template>
  <div id="app">
    <!-- Navbar -->
    <div class="container-nav">
      <div>
        <img src="../src/assets/images/South.jpg" alt="Logo" class="img" />
      </div>
      <div>
        <a href="index.html" id="a">Produtos</a>
      </div>
      <div class="cart-area">
        <a href="cart.html">
          <img
            src="https://static.vecteezy.com/system/resources/previews/017/196/580/large_2x/shopping-cart-icon-on-transparent-background-free-png.png"
            alt="Carrinho"
            class="cart-img"
          />
          <span class="cart-badge" v-if="cart > 0">{{ cart }}</span>
        </a>
      </div>
    </div>

    <!-- Lista de Produtos -->
    <div id="container">
      <div class="product-display">
        <div class="product-container" v-for="product in products" :key="product.id">
          <a :href="'product.html?id=' + product.id" style="text-decoration: none">
            <div class="product-image">
              <img :src="product.image" :alt="product.title" />
            </div>
            <div class="product-info">
              <h1>{{ product.title }}</h1>
              <p>{{ product.description }}</p>
            </div>
          </a>
          <p v-if="product.inStock >= 10">In Stock</p>
          <p v-else-if="product.inStock < 10 && product.inStock > 1">Almost out of stock</p>
          <p v-else>Out of stock</p>
          <button
            class="button"
            :class="{ disabledButton: product.inStock < 1 }"
            @click="addToCart(product)"
            :disabled="product.inStock < 1"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Rodapé -->
    <div class="container-footer">
      <div>
        <img src="../src/assets/images/South (1).jpg" alt="Rodapé" id="img" />
      </div>
      <div class="box-2">
        <h4>Tem alguma dúvida? Contate-nos!!</h4>
        <p>E-mail: southwall@gmail.com</p>
        <p>Fone: +55 (47) 9 9999-9999</p>
        <p>Facebook: SouthWall</p>
        <p>Instagram: southwall</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cart = ref(0)

const addToCart = (product) => {
  cart.value += 1
  let storedCart = JSON.parse(localStorage.getItem('cart')) || []

  const existingItem = storedCart.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    storedCart.push({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      quantity: 1,
    })
  }

  localStorage.setItem('cart', JSON.stringify(storedCart))
}

const products = ref([
  {
    id: 1,
    title: 'Produto 1',
    description: 'Descrição do Produto 1',
    image: '../src/assets/images/image1.png',
    inStock: 10,
  },
  {
    id: 2,
    title: 'Produto 2',
    description: 'Descrição do Produto 2',
    image: '../src/assets/images/image2.png',
    inStock: 5,
  },
  {
    id: 3,
    title: 'Produto 3',
    description: 'Descrição do Produto 3',
    image: '../src/assets/images/image3.png',
    inStock: 0,
  },
  {
    id: 4,
    title: 'Produto 4',
    description: 'Descrição do Produto 4',
    image: '../src/assets/images/image4.png',
    inStock: 3,
  },
  {
    id: 5,
    title: 'Produto 5',
    description: 'Descrição do Produto 5',
    image: '../src/assets/images/image5.png',
    inStock: 10,
  },
  {
    id: 6,
    title: 'Produto 6',
    description: 'Descrição do Produto 6',
    image: '../src/assets/images/image6.png',
    inStock: 10,
  },
  {
    id: 7,
    title: 'Produto 7',
    description: 'Descrição do Produto 7',
    image: '../src/assets/images/image7.png',
    inStock: 10,
  },
  {
    id: 8,
    title: 'Produto 8',
    description: 'Descrição do Produto 8',
    image: '../src/assets/images/image8.jpeg',
    inStock: 10,
  },
  {
    id: 9,
    title: 'Produto 9',
    description: 'Descrição do Produto 9',
    image: '../src/assets/images/image9.jpeg',
    inStock: 10,
  },
  {
    id: 10,
    title: 'Produto 10',
    description: 'Descrição do Produto 10',
    image: '../src/assets/images/image10.jpeg',
    inStock: 10,
  },
])

onMounted(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || []
  const total = storedCart.reduce((sum, item) => sum + item.quantity, 0)
  cart.value = total
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fff0f0;
  color: #600;
}
a {
  color: white;
  font-size: 20px;
  margin-left: 9%;
  display: grid;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
.img {
  margin-left: 30px;
}
.container-nav {
  height: 100px;
  background-color: #c0392b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.container-nav #a {
  color: white;
  font-size: 20px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: left;
}

.container-footer {
  background-color: #c0392b;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.container-footer div {
  flex: 1 1 300px;
}

.container-footer p {
  margin-top: 8px;
  margin-bottom: 5px;
}

#img {
  max-width: 100%;
  height: auto;
}

#img {
  height: 100%;
  margin-left: 15%;
}
h4 {
  font-size: 28px;
  margin-top: 60px;
  margin-bottom: 30px;
}
.cart-area {
  display: flex;
  align-items: center;
}

.cart-wrapper {
  position: relative;
  display: inline-block;
}

.cart-img {
  width: 40px;
  height: auto;
}

.cart-badge {
  position: absolute;
  top: 0px;
  right: 40px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: bold;
}

.product-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 70px;
  row-gap: 40px;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}

.img {
  margin: 0;
}
.cart-img {
  height: 40px;
  margin-right: 50px;
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
  height: 450px;
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
.cart-item {
  display: flex;
  gap: 13%;
}
.img-in-cart {
  width: 100%;
  margin-top: 1.5%;
}
.item-cart-title {
  margin-top: 3%;
  width: 100%;
}
.item-descricao {
  margin-top: 3%;
  width: 100%;
}
.item-quantidade {
  margin-top: 3%;
  width: 100%;
}
.button-cart {
  height: 40px;
  margin: 2%;
  background-color: #c0392b;
  border: none;
  color: white;
  padding-left: 1%;
  padding-right: 1%;
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
    margin: 10px auto;
    display: block;
  }
}
</style>
