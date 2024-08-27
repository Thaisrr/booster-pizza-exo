import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useCartStore = defineStore('Cart', () => {
    const cart = ref(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const cartSize = computed(() => cart.value.length);
    function add(produit) {
        cart.value.push(produit);
        localStorage.setItem('cart', JSON.stringify(cart.value));
    }

    function remove(name) {
        const index = cart.value.findIndex(p => p.name === name);
        cart.value.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart.value));
    }

    return {
        cart,
        add,
        remove,
        cartSize
    }
})