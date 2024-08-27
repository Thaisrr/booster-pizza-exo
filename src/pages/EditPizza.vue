<script setup>
import {usePizza} from "../composables/usePizza.js";
import PizzaForm from "../components/PizzaForm.vue";
const props = defineProps(['id']);
const {pizza} = usePizza(props.id);
</script>

<template>
  <h1>Editer une pizza</h1>
  <PizzaForm :pizza="pizza" />
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>