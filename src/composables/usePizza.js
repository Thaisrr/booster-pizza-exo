import {onMounted, ref} from "vue";

export const usePizza = (id) => {
    const pizza = ref({});

    onMounted(async () => {
        const response = await fetch('http://localhost:3000/pizzas/' + id);
        pizza.value = await response.json();
    });

    return {pizza};
}