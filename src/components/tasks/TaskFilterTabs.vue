<template>


<div class="tabs">


<button

:class="{active:modelValue==='all'}"

@click="$emit('update:modelValue','all')"

>

All

</button>



<button

:class="{active:modelValue==='pending'}"

@click="$emit('update:modelValue','pending')"

>

Pending

</button>




<button

:class="{active:modelValue==='completed'}"

@click="$emit('update:modelValue','completed')"

>

Completed

</button>



</div>


</template>




<script setup>


defineProps({


modelValue:String


})



defineEmits([

'update:modelValue'

])


</script>




<style scoped>


.tabs{


display:flex;

gap:10px;


}



button{


padding:10px 16px;

border-radius:10px;

border:1px solid #ddd;

background:white;

cursor:pointer;


}



.active{


background:#6d4df8;

color:white;


}


</style>