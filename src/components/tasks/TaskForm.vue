<template>

<section class="composer">


<input

v-model="title"

type="text"

placeholder="What do you need to do?"

@keyup.enter="submitTask"

/>



<button

@click="submitTask"

>

Add Task

</button>


</section>


</template>



<script setup>


import {ref} from 'vue'


const title = ref('')


const emit = defineEmits([

'add-task'

])





function submitTask(){


const value = title.value.trim()



if(!value) return



emit(

'add-task',

value

)



title.value=''


}


</script>



<style scoped>


.composer{


display:grid;

grid-template-columns:1fr auto;

gap:12px;

background:white;

padding:14px;

border-radius:16px;

border:1px solid #e8eaf2;


}



input{


padding:12px;

border-radius:10px;

border:1px solid #ddd;


}



button{


background:#6d4df8;

color:white;

border:0;

padding:12px 18px;

border-radius:10px;

cursor:pointer;


}


</style>