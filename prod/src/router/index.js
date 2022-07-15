import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            friendlyName: "Home",
            title: "home",
            requiresAuth: true,
        },
    },
    { path: '/:pathMatch(.*)*', name: "404", component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;