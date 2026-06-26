<template>


<div class="card">


<h2>New Password</h2>



<form @submit.prevent="submit">


<input

v-model="password"

type="password"

placeholder="New password"

required

/>



<p>

{{message}}

</p>



<button>

Update password

</button>



</form>


</div>


</template>




<script setup>


import {ref} from 'vue'

import {useRouter} from 'vue-router'

import {useAuth} from '../../composables/useAuth'



const password=ref('')

const message=ref('')


const router=useRouter()



const {

changePassword

}=useAuth()





async function submit(){


try{


await changePassword(

password.value

)



message.value=

"Password updated"



setTimeout(()=>{


router.push('/login')


},1500)



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