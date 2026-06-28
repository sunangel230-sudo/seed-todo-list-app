<template>

<header class="topbar">


<div class="title">


<div class="logo">

✓

</div>



<h1>

Todo List

</h1>


</div>



<div class="actions">


<button

class="logout"

@click="handleLogout"

>

Logout

</button>


</div>


</header>

</template>



<script setup>


import {useRouter} from 'vue-router'

import {useAuth} from '../../composables/useAuth'



const router = useRouter()



const {

signOut

}=useAuth()





async function handleLogout(){


await signOut()


router.push('/login')


}



</script>




<style scoped>


.topbar {

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:20px 24px;

  background:rgba(255,255,255,0.8);

  backdrop-filter:blur(15px);

  border:1px solid #e8e7ff;

  border-radius:20px;

  box-shadow:
  0 10px 30px rgba(109,77,248,.08);

}


.logo {

  width:42px;

  height:42px;

  border-radius:14px;

  background:
  linear-gradient(
    135deg,
    #8b5cf6,
    #5b21b6
  );

  color:white;

  display:grid;

  place-items:center;

  font-weight:800;

  box-shadow:
  0 8px 20px rgba(109,77,248,.3);

}

</style>