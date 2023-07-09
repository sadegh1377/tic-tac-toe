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
        component: HomeView,
        meta: {
            title: 'Tic tac toe',
        }
    },
    {
        path: '/ticTacToe',
        name: 'TicTacToe',
        component: TicTacToe,
        meta: {
            title: 'Classic Tic tac toe',
        }
    },
    {
        path: '/ultimate-ticTacToe',
        name: 'UltimateTicTacToe',
        component: UltimateTicTacToe,
        meta: {
            title: 'Ultimate Tic tac toe',
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
    if (!nearestWithMeta) return next();
})
export default router
