<template>

<div class="card">


<h2>Create Account</h2>



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



<p>

{{message}}

</p>



<button>

Sign Up

</button>


</form>



<RouterLink to="/login">

Already have account?

</RouterLink>


</div>

</template>



<script setup>


import {ref} from 'vue'


import {useAuth} from '../../composables/useAuth'



const email=ref('')

const password=ref('')


const message=ref('')



const {

signUp

}=useAuth()






async function submit(){


try{


await signUp(

email.value,

password.value

)


message.value=

"Check your email to confirm registration"



}catch(err){


message.value=

err.message


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

border-radius:10px;

border:1px solid #ddd;

}



button{

padding:12px;

background:#6d4df8;

color:white;

border:0;

border-radius:10px;

}


</style>