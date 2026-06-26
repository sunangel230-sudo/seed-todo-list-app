<template>

<div class="app-shell">


<Sidebar

v-model="filter"

:total="totalTasks"

:completed="completedTasks"

:pending="pendingTasks"

@clear-completed="clearCompleted"

/>



<main class="main">


<AppHeader />





<h2 class="page-title">

All Tasks

</h2>





<TaskForm

@add-task="handleAddTask"

/>





<TaskFilterTabs

v-model="filter"

/>






<TaskList

:tasks="filteredTasks"

@toggle="toggleTask"

@edit="startEdit"

@delete="removeTask"

/>





<TaskStats

:total="totalTasks"

:completed="completedTasks"

:pending="pendingTasks"

/>






</main>






<div

v-if="editingTask"

class="modal-backdrop"

@click.self="cancelEdit"

>




<div class="modal">


<h3>

Edit Task

</h3>






<label>

Title

<input

v-model="editingTask.title"

/>

</label>







<label>

Subtitle

<input

v-model="editingTask.subtitle"

/>

</label>







<label>

Due date

<input

v-model="editingTask.due_date"

/>

</label>








<div class="modal-actions">


<button @click="cancelEdit">

Cancel

</button>





<button

class="primary"

@click="saveEdit"

>

Save

</button>



</div>




</div>




</div>






</div>

</template>







<script setup>


import { computed, ref, onMounted } from 'vue'


import AppHeader from '../components/layout/AppHeader.vue'

import Sidebar from '../components/layout/Sidebar.vue'

import TaskFilterTabs from '../components/tasks/TaskFilterTabs.vue'

import TaskForm from '../components/tasks/TaskForm.vue'

import TaskList from '../components/tasks/TaskList.vue'

import TaskStats from '../components/tasks/TaskStats.vue'


import { useTasks } from '../composables/useTasks'







const filter = ref('all')


const editingTask = ref(null)







const {

tasks,

loadTasks,

addTask,

updateTask,

deleteTask

}=useTasks()








onMounted(async()=>{


await loadTasks()


})








const filteredTasks = computed(()=>{


if(filter.value === 'completed'){


return tasks.value.filter(

task=>task.completed

)


}





if(filter.value === 'pending'){


return tasks.value.filter(

task=>!task.completed

)


}




return tasks.value


})








const totalTasks = computed(()=>tasks.value.length)



const completedTasks = computed(()=>


tasks.value.filter(

task=>task.completed

).length


)





const pendingTasks = computed(()=>


tasks.value.filter(

task=>!task.completed

).length


)










async function handleAddTask(title){


await addTask(title)


}








async function toggleTask(id){


const task = tasks.value.find(

task=>task.id===id

)



if(!task)return




await updateTask(id,{


completed:!task.completed


})


}







async function removeTask(id){


await deleteTask(id)


}







function startEdit(task){


editingTask.value={...task}


}






function cancelEdit(){


editingTask.value=null


}








async function saveEdit(){


await updateTask(

editingTask.value.id,

{


title:editingTask.value.title,


subtitle:editingTask.value.subtitle,


due_date:editingTask.value.due_date


}


)



editingTask.value=null


}








async function clearCompleted(){



const done = tasks.value.filter(

task=>task.completed

)



for(const task of done){


await deleteTask(task.id)


}



}



</script>







<style scoped>


.app-shell{


min-height:100vh;

display:grid;

grid-template-columns:260px 1fr;

background:#f5f6fb;


}







.main{


padding:22px;

display:flex;

flex-direction:column;

gap:16px;


}







.page-title{


margin:0;


}








.modal-backdrop{


position:fixed;

inset:0;

background:rgba(0,0,0,.5);

display:grid;

place-items:center;


}







.modal{


background:white;

padding:25px;

border-radius:18px;

width:400px;

display:flex;

flex-direction:column;

gap:15px;


}







.modal label{


display:flex;

flex-direction:column;

gap:6px;


}







.modal input{


padding:10px;

border-radius:10px;

border:1px solid #ddd;


}







.modal-actions{


display:flex;

justify-content:flex-end;

gap:10px;


}







.primary{


background:#6d4df8;

color:white;

border:0;

padding:10px 16px;

border-radius:10px;

cursor:pointer;


}







@media(max-width:900px){


.app-shell{


grid-template-columns:1fr;


}


}


</style>