<script setup>

</script>

<template>
  <header>
    <hgroup>
      <h1>M2I Pizz'</h1>
      <p>La référence de la pizza !</p>
      <p>Depuis 1889 !</p>
    </hgroup>
    <img src="https://les-pizzas.laptitepoulerouge.com/wp-content/uploads/2021/03/pizzeria-template-header-pizza-img.png" alt="" />
  </header>

</template>

<style scoped>
header {
  background: var(--primary);
  color: var(--dark);
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  text-align: center;
  gap: 200px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
}

img {
  width: 300px;
  animation: circle 20s infinite linear;
}

@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }

}



</style>