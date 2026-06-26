<template>


<div class="card">


<h2>Reset Password</h2>



<form @submit.prevent="submit">


<input

v-model="email"

type="email"

placeholder="Email"

required

/>



<p>

{{message}}

</p>



<button>

Send reset email

</button>


</form>



</div>


</template>



<script setup>


import {ref} from 'vue'


import {useAuth} from '../../composables/useAuth'



const email=ref('')

const message=ref('')



const {

resetPassword

}=useAuth()





async function submit(){


try{


await resetPassword(

email.value

)



message.value=

"Password reset email sent"



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

}



input,button{

width:100%;

padding:12px;

margin-top:10px;

}


button{

background:#6d4df8;

color:white;

border:0;

}


</style>