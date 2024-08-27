<script setup>
import {Field, FieldArray, Form} from "vee-validate";
import {computed, onMounted, onUpdated, ref, watch} from "vue";

const emit = defineEmits(['submit']);
const props = defineProps({
  pizza: {
    type: Object,
    default: () => ({
      name: "",
      price: 0,
      image: 'https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png',
      base: '',
      ingredients: ['', '', '']
    })
  }
});

const nbIngredients = computed(() => props.pizza.ingredients?.length ||3);

const handleSubmit = (values) => {
  emit('submit', values);
}

</script>

<template>
  <Form @submit="handleSubmit" v-if="pizza">
    <p>
      <label for="name">Nom de la pizza</label>
      <Field name="name" type="text" :model-value="pizza.name" />
    </p>
    <p>
      <label for="price">Prix de la pizza</label>
      <Field name="price" type="number" :model-value="pizza.price" />
    </p>
    <p>
      <label for="image">Image de la pizza</label>
      <Field name="image" type="text" :model-value="pizza.image" />
    </p>
    <p>
      <label for="base">Base de la pizza</label>
      <Field name="base" type="text" :model-value="pizza.base" />
    </p>
    <p class="grid" v-if="pizza.ingredients">
      <label for="ingredients">Ingrédients de la pizza</label>
      <FieldArray name="ingredients" >
        <Field :name="`ingredients[${i - 1}]`" type="text" v-for="i in nbIngredients" :key="i" :model-value="pizza?.ingredients[i - 1]"/>
      </FieldArray>
      <button type="button" @click="pizza.ingredients.push('')">Ajouter un ingrédient</button>
    </p>
    <p>
      <button type="submit">Enregistrer</button>
    </p>
  </Form>

</template>

<style scoped>

form {
  width: 80%;
  margin: auto;
}

form p {
  display: flex;
  flex-direction: column;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.grid label {
  grid-column: 1 / 4;
}

.grid button {
  grid-column: 1 / 4;
justify-self: center;
}
</style>