<script setup>
   import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
</script>

<template>
  <div class="container-nav">
    <div>
      <img src="@/assets/images/South.jpg" alt="Logo" class="img" />
    </div>
    <div>
      <router-link to="/produtos"><a id="a">Produtos</a></router-link>
    </div>
    <div class="cart-area"
    ><router-link to="/cart">
      <a href="cart.html">
        <img
          src="https://static.vecteezy.com/system/resources/previews/017/196/580/large_2x/shopping-cart-icon-on-transparent-background-free-png.png"
          alt="Carrinho"
          class="cart-img"
        />
      </a>
        <div class="cart-badge">
            <span>{{ cartStore.totalItems }}</span>
        </div>
    </router-link>
  </div>
  </div>
</template>

<style scoped>
.container-nav {
  height: 100px;
  background-color: #c0392b;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-nav #a {
  color: white;
  font-size: 20px;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: left;
}

.container-nav a {
  color: white;
  font-size: 20px;
  margin-left: 9%;
  display: grid;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.container-nav img {
  margin-left: 30px;
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
</style>
