<script setup>
import {ref} from "vue";
import {usePizzas} from "../composables/usePizzas.js";

const {pizzas} = usePizzas();
</script>

<template>
  <hgroup>
    <h1>Dashboard Admin</h1>
    <router-link :to="{name: 'addPizza'}"><span class="material-symbols-outlined">add</span></router-link>
  </hgroup>

  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
        <th>Base</th>
        <th>Ingrédients</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pizza in pizzas" :key="pizza.id">
        <td>{{pizza.name}}</td>
        <td>{{pizza.price}} €</td>
        <td>{{pizza.base}}</td>
        <td>{{pizza.ingredients.join(', ')}}</td>
        <td>
          <router-link :to="{name: 'editPizza', params: {id: pizza.id}}"><span class="material-symbols-outlined">edit</span></router-link>
          <span class="material-symbols-outlined">delete</span>
        </td>
      </tr>
    </tbody>
  </table>




</template>

<style scoped>
hgroup {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
}

</style>