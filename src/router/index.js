import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
        import ( /* webpackChunkName: "home" */ '@/views/Home.vue'),
    redirect: '/situation',
    children: [{
            path: '/situation', //综合态势
            name: 'situation',
            meta: {
                scene: 'situation' //场景
            },
            component: () =>
                import ( /* webpackChunkName: "situation" */ '@/views/situation/situation.vue'),
        },
        {
            path: '/command', //指挥调度
            name: 'command',
            component: () =>
                import ( /* webpackChunkName: "command" */ '@/views/command/command.vue'),
        },
        {
            path: '/prediction', //事件预测
            name: 'prediction',
            component: () =>
                import ( /* webpackChunkName: "prediction" */ '@/views/prediction/prediction.vue'),
        },
        {
            path: '/rural', //
            name: 'rural',
            component: () =>
                import ( /* webpackChunkName: "rural" */ '@/views/rural/rural.vue'),
        },
    ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router