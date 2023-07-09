import Vue from 'vue'
import VueRouter from 'vue-router'
import TicTacToe from "@/components/TicTacToe";
import UltimateTicTacToe from "@/components/UltimateTicTacToe";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/ticTacToe',
        name: 'TicTacToe',
        component: TicTacToe
    },
    {
        path: '/ultimate-ticTacToe',
        name: 'UltimateTicTacToe',
        component: UltimateTicTacToe
    }
]

const router = new VueRouter({
    routes
})

export default router
