import {onMounted, ref} from "vue";

export const usePizzas = () => {
    const pizzas = ref([]);

    onMounted(async () => {
        const response = await fetch('http://localhost:3000/pizzas');
        pizzas.value = await response.json();
    });

    return {pizzas};
}