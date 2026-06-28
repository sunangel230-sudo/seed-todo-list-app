import { createRouter, createWebHashHistory } from 'vue-router'


import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.vue'
import ResetPasswordPage from '../pages/ResetPasswordPage.vue'
import TodoPage from '../pages/TodoPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'


import { supabase } from '../lib/supabase'


const routes = [

{
path:'/',
redirect:'/login'
},

{
path:'/login',
component:LoginPage,
meta:{
guest:true
}
},

{
path:'/register',
component:RegisterPage,
meta:{
guest:true
}
},

{
path:'/forgot-password',
component:ForgotPasswordPage,
meta:{
guest:true
}
},

{
path:'/reset-password',
component:ResetPasswordPage
},

{
path:'/dashboard',
component:TodoPage,
meta:{
requiresAuth:true
}
},

{
path:'/:pathMatch(.*)*',
component:NotFoundPage
}

]


const router = createRouter({

history:createWebHashHistory(),

routes

})



router.beforeEach(async(to)=>{


const { data } = await supabase.auth.getSession()


const loggedIn = !!data.session



if(to.meta.requiresAuth && !loggedIn){

return '/login'

}



if(to.meta.guest && loggedIn){

return '/dashboard'

}


})



export default router