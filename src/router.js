import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
    },
    {
        path: '/BattleRoyale',
        name: 'BattleRoyale',
        component: () => import('./views/BattleRoyale.vue')
    },
    {
        path: '/SaveTheWorld',
        name: 'SaveTheWorld',
        component: () => import('./views/SaveTheWorld.vue')
    },
    {
        path: '/Crew',
        name: 'Crew',
        component: () => import('./views/Crew.vue')
    },
    {
        path: '/News',
        name: 'News',
        component: () => import('./views/News.vue')
    },
],

router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        let scrollTo = 0

        if (to.hash) {
            scrollTo = to.hash
        } else if (savedPosition) {
            scrollTo = savedPosition.y
        }

        return goTo(scrollTo)
    },
})

export default router