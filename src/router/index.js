import Vue from 'vue'
import VueRouter from 'vue-router'
import TicTacToe from "@/components/TicTacToe";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'TicTacToe',
        component: TicTacToe
    }
]

const router = new VueRouter({
    routes
})

export default router
