<template>

<div

v-if="message"

class="error"

>

{{ message }}

</div>


</template>



<script setup>


defineProps({


message:{

type:String,

default:''

}


})


</script>



<style scoped>


.error{


background:#ffe8e8;

color:#d93030;

border:1px solid #ffbcbc;

padding:12px 15px;

border-radius:10px;

font-size:14px;


}


</style>