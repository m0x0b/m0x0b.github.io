import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Pascals0 from "../views/wall/pascals0.vue"
import Pascals1 from "../views/wall/pascals1.vue"
import Detritus0 from "../views/wall/detritus0.vue"
import Detritus1 from "../views/wall/detritus1.vue"
import Afterimage1 from "../views/wall/afterimage1.vue"
import Afterimage0 from "../views/wall/afterimage0.vue"
import Polyethylene1 from "../views/wall/polyethylene1.vue"
import Polyethylene0 from "../views/wall/polyethylene0.vue"
import Pyrolysis0 from "../views/wall/pyrolysis0.vue"
import Pyrolysis1 from "../views/wall/pyrolysis1.vue"
import PageNotFound from "../views/PageNotFound.vue"
import About from "../views/About.vue"

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
        path: "/",
        name: "about",
        component: About,
        meta: {
            friendlyName: "About",
            title: "about",
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
    {
        path: "/wall/pascals1",
        name: "pascals1",
        component: Pascals1,
        meta: {
            friendlyName: "pascals1",
            title: "pascals1",
        },
    },
    {
        path: "/wall/detritus0",
        name: "detritus0",
        component: Detritus0,
        meta: {
            friendlyName: "detritus0",
            title: "detritus0",
        },
    },
    {
        path: "/wall/detritus1",
        name: "detritus1",
        component: Detritus1,
        meta: {
            friendlyName: "Detritus1",
            title: "Detritus0",
        },
    },
    {
        path: "/wall/afterimage0",
        name: "afterimage0",
        component: Afterimage0,
        meta: {
            friendlyName: "afterimage0",
            title: "afterimage0",
        },
    },
    {
        path: "/wall/afterimage1",
        name: "afterimage1",
        component: Afterimage1,
        meta: {
            friendlyName: "afterimage1",
            title: "afterimage1",
        },
    },
    {
        path: "/wall/polyethylene0",
        name: "polyethylene0",
        component: Polyethylene0,
        meta: {
            friendlyName: "polyethylene0",
            title: "polyethylene0",
        },
    },
    {
        path: "/wall/polyethylene1",
        name: "polyethylene1",
        component: Polyethylene1,
        meta: {
            friendlyName: "polyethylene1",
            title: "polyethylene1",
        },
    },
    {
        path: "/wall/pyrolysis0",
        name: "pyrolysis0",
        component: Pyrolysis0,
        meta: {
            friendlyName: "pyrolysis0",
            title: "pyrolysis0",
        },
    },
    {
        path: "/wall/pyrolysis1",
        name: "pyrolysis1",
        component: Pyrolysis1,
        meta: {
            friendlyName: "pyrolysis1",
            title: "pyrolysis1",
        },
    },
    { path: '/:pathMatch(.*)*', name: "404", component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;