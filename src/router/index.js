import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"
import Home from "../views/Home.vue";
import Produk from "../views/Produk.vue";
import Contact from "../views/Contact.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import SingleProduk from "../views/SingleProduk.vue";

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
        path: "/singleproduk",
        name: "Singleproduk",
        component: SingleProduk,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: Checkout
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
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