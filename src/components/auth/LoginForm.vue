<template>

<div class="card">

<h2>Login</h2>


<form @submit.prevent="submit">


<input

v-model="email"

type="email"

placeholder="Email"

required

/>


<input

v-model="password"

type="password"

placeholder="Password"

required

/>



<p v-if="error" class="error">

{{ error }}

</p>



<button :disabled="loading">

Login

</button>



</form>



<RouterLink to="/register">

Create account

</RouterLink>



<br>



<RouterLink to="/forgot-password">

Forgot password?

</RouterLink>


</div>

</template>



<script setup>


import {ref} from 'vue'

import {useRouter} from 'vue-router'

import {useAuth} from '../../composables/useAuth'



const email = ref('')

const password = ref('')



const router = useRouter()



const {

signIn,

loading,

error

}=useAuth()






async function submit(){


try{


await signIn(

email.value,

password.value

)


router.push('/dashboard')


}catch(e){



}


}



</script>



<style scoped>

.card{

width:350px;

background:white;

padding:25px;

border-radius:16px;

display:flex;

flex-direction:column;

gap:15px;

}



input{

padding:12px;

border:1px solid #ddd;

border-radius:10px;

}



button{

padding:12px;

background:#6d4df8;

color:white;

border:0;

border-radius:10px;

}



.error{

color:red;

}


</style>