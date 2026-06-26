<template>


<aside class="sidebar">


<nav>


<button

:class="{active:modelValue==='all'}"

@click="$emit('update:modelValue','all')"

>


All Tasks


<span>

{{total}}

</span>


</button>




<button

:class="{active:modelValue==='pending'}"

@click="$emit('update:modelValue','pending')"

>


Pending


<span>

{{pending}}

</span>


</button>





<button

:class="{active:modelValue==='completed'}"

@click="$emit('update:modelValue','completed')"

>


Completed


<span>

{{completed}}

</span>


</button>


</nav>





<button

class="clear"

@click="$emit('clear-completed')"

>

Clear Completed

</button>



</aside>


</template>





<script setup>


defineProps({


modelValue:String,


total:Number,


completed:Number,


pending:Number


})



defineEmits([

'update:modelValue',

'clear-completed'

])


</script>





<style scoped>


.sidebar{


background:white;

border-right:1px solid #e8eaf2;

padding:25px 18px;

display:flex;

flex-direction:column;

justify-content:space-between;


}



nav{


display:flex;

flex-direction:column;

gap:10px;


}




button{


border:0;

background:transparent;

padding:12px;

border-radius:12px;

display:flex;

justify-content:space-between;

cursor:pointer;


}



button.active{


background:#f1edff;

color:#6d4df8;


}



.clear{


color:#e15555;

justify-content:flex-start;


}


</style>