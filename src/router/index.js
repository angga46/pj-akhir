import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/produk",
        name: "Produk",
        component: Produk
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;