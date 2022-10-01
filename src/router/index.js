import Vue from 'vue'
import VueRouter from 'vue-router'
import TicTacToe from "@/components/TicTacToe";
import UltimateTicTacToe from "@/components/UltimateTicTacToe";

Vue.use(VueRouter)

const routes = [
    {
        path: '/ticTacToe',
        name: 'TicTacToe',
        component: TicTacToe
    },
    {
        path: '/',
        name: 'UltimateTicTacToe',
        component: UltimateTicTacToe
    }
]

const router = new VueRouter({
    routes
})

export default router
