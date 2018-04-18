import home from './../views/home/home.vue'
import plan from './../views/plan/plan.vue'
import unit from './../views/unit/unit.vue'
import creative from './../views/creative/creative.vue'
import login from './../views/login/login.vue'
import createAD from './../views/create/createAD.vue'
import newCreative from './../views/newCreative/newCreative.vue'
import newUnit from './../views/newUnit/newUnit.vue'
import newPlan from './../views/newPlan/newPlan.vue'

let routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        name:'login',
        path:'/login',
        component:login
    },
    {
        name:'home',
        path:'/home',
        component:home
    },
    {
        name:'plan',
        path:'/plan',
        component:plan
    },
    {
        name:'unit',
        path:'/unit',
        component:unit
    },
    {
        name:'creative',
        path:'/creative',
        component:creative
    },
    {
        name:'create',
        path:'/create',
        component:createAD,
        children:[
            {
                name:'newCreative',
                path:'newCreative',
                component:newCreative
            },
            {
                name:'newUnit',
                path:'newUnit',
                component:newUnit
            },
            {
                name:'newPlan',
                path:'newPlan',
                component:newPlan
            }
        ]
    },
    
]

export default routes