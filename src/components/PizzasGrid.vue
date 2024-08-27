<script setup>
import {computed, ref} from "vue";
import PizzaCard from "./PizzaCard.vue";
import Filters from "./Filters.vue";
import {usePizzas} from "../composables/usePizzas.js";

const {pizzas} = usePizzas();
const filter = ref("");
const order = ref("asc");
const filterPizzas = computed(() => {
    // Filtrer par base
    const lst = !filter.value ? pizzas.value : pizzas.value.filter(pizza => pizza.base === filter.value);
    // ordonner par prix :
    return lst.sort((a, b) => order.value === "asc" ? a.price - b.price : b.price - a.price);
})

</script>

<template>
  <section>
    <h2>Les Pizzas !</h2>
    <p class="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <p class="center">Beatae delectus ducimus ex iste, iure libero non perferendis quisquam repellendus rerum sequi soluta vel voluptate! </p>
    <p class="center">Commodi corporis distinctio explicabo nulla odit.</p>

    <Filters v-model:filter="filter" v-model:order="order"/>

    <div class="grid">
      <PizzaCard v-for="pizza in filterPizzas" :key="pizza.id" :pizza="pizza"/>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 50px;
}

h2 {
  text-align: center;
  font-size: 2em;
  margin: 100px auto 50px;
}

.center {
  text-align: center;
}

.center:last-child {
  margin-bottom: 100px;
}
</style>