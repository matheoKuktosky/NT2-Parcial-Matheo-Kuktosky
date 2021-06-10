import Vue from 'vue'
import VueRouter from 'vue-router'
import Practica from './componentes/Practica.vue'
import Teoria from './componentes/Teoria.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/practica' },
        { path: '/practica', component: Practica },
        { path: '/teoria', component: Teoria },
    ]
})