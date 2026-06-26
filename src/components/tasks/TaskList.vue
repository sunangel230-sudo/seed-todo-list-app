<template>


<section class="list">


<TaskItem

v-for="task in tasks"

:key="task.id"

:task="task"

@toggle="$emit('toggle',$event)"

@delete="$emit('delete',$event)"

@edit="$emit('edit',$event)"


/>


</section>


</template>



<script setup>


import TaskItem from './TaskItem.vue'



defineProps({


tasks:Array


})



defineEmits([

'toggle',

'delete',

'edit'

])


</script>



<style scoped>


.list{


display:flex;

flex-direction:column;

gap:12px;


}


</style>