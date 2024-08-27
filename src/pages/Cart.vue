<script setup>
import {storeToRefs} from "pinia";
import {useCartStore} from "../store/cart.js";
import {computed} from "vue";

const {remove, ...store} = useCartStore();
const {cart} = storeToRefs(store);

const cartClean = computed(() => {
  const merged = [];
    cart.value.forEach((item) => {
        if(!merged.some((i) => i.id === item.id)){
            merged.push({
              ...item,
              quantity: cart.value.filter((i) => i.id === item.id).length,
              total: cart.value.filter((i) => i.id === item.id).reduce((acc, i) => acc + i.price, 0)
            })
        }
    });

    return merged;
});

const total = computed(() => {
  return parseFloat(cartClean.value.reduce((acc, item) => acc + item.total, 0)).toFixed(2);
});




</script>

<template>
  <h1>Panier</h1>
  <table>
    <thead>
      <tr>
        <th scope="col">Produit</th>
        <th scope="col">Prix</th>
        <th scope="col">Quantité</th>
        <th scope="col">Total</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cartClean">
        <td>{{item.name}}</td>
        <td>{{item.price}}€</td>
        <td>{{item.quantity}}</td>
        <td>{{item.total}}€</td>
        <td>
          <button @click="remove(item.name)">Supprimer</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="total" >
        <th scope="row" colspan="3">Total</th>
        <td >{{total}}€</td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped>

h1 {
  text-align: center;
}


.total {
  border:  solid var(--primary);
}
</style>