<script setup>
const filter = defineModel('filter');
const order = defineModel('order')
</script>

<template>
  <div class="filter">
    <p>
      <label for="filter">Filtrer par base</label>
      <select v-model="filter" id="filter">
        <option value="">Toutes</option>
        <option value="tomato">Tomate</option>
        <option value="creme">Crème</option>
      </select>
    </p>
    <p>
      <label for="order">Trier par prix</label>
      <select v-model="order" id="order">
        <option value="asc">Croissant</option>
        <option value="desc">Décroissant</option>
      </select>
    </p>

  </div>
</template>

<style scoped>
  .filter {
  display: flex;
  justify-content: flex-end;
  margin: 20px auto 50px;
  gap: 20px;
}

  p {
    display: flex;
    flex-direction: column;
  }

  select {
    width: 200px;
  }

</style>