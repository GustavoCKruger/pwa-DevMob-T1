<script setup></script>

<template>
  <div class="container-footer">
    <div>
      <img src="@/assets/images/South (1).jpg" alt="Rodapé" id="img" />
    </div>
    <div class="box-2">
      <h4>Tem alguma dúvida? Contate-nos!!</h4>
      <p>E-mail: southwall@gmail.com</p>
      <p>Fone: +55 (47) 9 9999-9999</p>
      <p>Facebook: SouthWall</p>
      <p>Instagram: southwall</p>
    </div>
  </div>
</template>

<style scoped>
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
}

h4 {
  font-size: 28px;
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
