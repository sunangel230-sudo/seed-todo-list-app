<template>


<footer>


{{total}} tasks total ·

{{completed}} completed ·

{{pending}} pending


</footer>


</template>



<script setup>


defineProps({


total:Number,

completed:Number,

pending:Number


})


</script>




<style scoped>


footer{


text-align:center;

color:#777;

padding:15px;


}


</style>