<script setup>
import {useCartStore} from "../store/cart.js";

defineProps(['pizza']);

const {add} = useCartStore();

</script>

<template>
  <article>
    <img :src="pizza.image" alt=""/>
    <h3>{{pizza.name}}</h3>
    <p class="flex">
      <span class="tag" v-for="ing in pizza.ingredients">{{ing}}</span>
    </p>
    <p>{{pizza.price}}€</p>
    <button class="btn" @click="add(pizza)">Ajouter au panier</button>
  </article>
</template>

<style scoped>
article {
  text-align: center;
}
img {
  width: 250px;
}

article:hover img {
  transform: scale(1.1) translateY(-10px);
  transition: all 0.5s;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
}

.tag {
  background: var(--primary);
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.8em;
}
</style>