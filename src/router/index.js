import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from "../views/Detail.vue"
import Create from "../views/CreatePost.vue"
import Tag from "../views/Tag.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:"/posts/:id",
        name: "Detail",
        component: Detail,
        props: true
    },
    {
        path:"/create",
        name:"Create",
        component: Create
    },
    {
        path:"/tag/:tag",
        name:"Tag",
        component: Tag,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
