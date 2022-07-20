import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pascals0 from "../views/wall/pascals0.vue"
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            friendlyName: "Home",
            title: "home",
        },
    },
    {
        path: "/wall/pascals0",
        name: "pascals0",
        component: Pascals0,
        meta: {
            friendlyName: "pascals0",
            title: "pascals0",
        },
    },
    { path: '/:pathMatch(.*)*', name: "404", component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;