import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        {path: '/cart', component: () => import('../pages/Cart.vue')},
        {path: '/admin', component: () => import('../pages/Admin.vue')},
        {path: '/admin/add', name: 'addPizza', component: () => import('../pages/AddPizza.vue')},
        {path: '/admin/edit/:id', name: 'editPizza', component: () => import('../pages/EditPizza.vue'), props: true},

    ],
})

