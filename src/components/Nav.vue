<script setup>
import {useCartStore} from "../store/cart.js";
import {storeToRefs} from "pinia";

const {cartSize} = storeToRefs(useCartStore());
</script>

<template>
  <nav>
    <ul>
      <li>
          <router-link to="/">Accueil</router-link>
      </li>
      <li>
          <router-link to="/admin">Admin</router-link>
      </li>
      <li>
        <router-link to="/cart" class="cart">
          <span class="material-symbols-outlined">shopping_cart</span>
          <span class="size">{{cartSize}}</span>
        </router-link>

      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  position: sticky;
  top: 0;
  background: var(--primary);
  z-index: 1;
}

ul {
  margin: 0 auto;
  list-style: none;
  display: flex;
  gap: 30px;
  width: 80%;
  justify-content: flex-end;
  padding: 10px 0;
}

li {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--dark);
}

span {
  font-size: 1.5em;
}

.size {
  background: var(--secondary);
  color: white;
  border-radius: 50px;
  aspect-ratio: 1/1;
  width: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
}

a:link, a:visited {
  color: var(--dark);
  text-decoration: none;
  font-size: 1.1em;
}

a:after {
  content: "";
  display: block;
  width: 0;
  height: 1px;
  background: var(--dark);
  transition: width .3s;
  position: relative;
  top: 5px;
}

a:not(.cart):hover:after, a:not(.cart).router-link-active:after {
  width: 100%;
}

.cart {
  display: flex;
  align-content: center;
  gap: 5px;
  justify-content: center;
}

</style>