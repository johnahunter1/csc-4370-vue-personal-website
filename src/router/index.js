import {createRouter, createWebHistory} from "vue-router"
import Home from "../components/Home.vue"
import Projects from "../components/Projects.vue"
import Contact from "../components/Contact.vue"

const routes = [
    {
        path:"/", // default page
        component: Home
    },
    {
        path: "/projects",
        component: Projects
    },
    {
        path: "/contact",
        component: Contact,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router