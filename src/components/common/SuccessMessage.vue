<template>


<div

v-if="message"

class="success"

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


.success{


background:#e7f8ec;

color:#218739;

border:1px solid #a8e6b8;

padding:12px 15px;

border-radius:10px;

font-size:14px;


}


</style>