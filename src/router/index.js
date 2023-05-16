import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Portofolio from "@/views/Portofolio.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "AboutView",
        component: About,
    },
    {
        path: "/portofolio",
        name: "PortofolioView",
        component: Portofolio,
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;