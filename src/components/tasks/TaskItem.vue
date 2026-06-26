<template>

<article class="task">


<button

class="check"

:class="{done:task.completed}"

@click="$emit('toggle',task.id)"

>

<span v-if="task.completed">

✓

</span>

</button>





<div class="content">


<h3

:class="{line:task.completed}"

>

{{task.title}}

</h3>





<p v-if="task.subtitle">

{{task.subtitle}}

</p>





<p

v-if="task.due_date"

class="date"

>

📅: {{task.due_date}}

</p>



</div>






<span

v-if="task.completed"

class="badge"

>

Completed

</span>






<div class="actions">


<button

class="edit"

@click="$emit('edit',task)"

>

✎

</button>





<button

class="delete"

@click="$emit('delete',task.id)"

>

🗑

</button>



</div>



</article>


</template>





<script setup>


defineProps({

task:{

type:Object,

required:true

}

})



defineEmits([

'toggle',

'edit',

'delete'

])


</script>





<style scoped>


.task{


display:grid;

grid-template-columns:auto 1fr auto auto;

gap:16px;

align-items:center;

background:white;

padding:18px;

border-radius:18px;

border:1px solid #e8eaf2;

box-shadow:

0 8px 25px rgba(0,0,0,.05);

transition:.2s;


}



.task:hover{


transform:translateY(-2px);


}





.check{


width:32px;

height:32px;

border-radius:50%;

border:2px solid #cbd5e1;

background:white;

cursor:pointer;

font-size:16px;

display:flex;

align-items:center;

justify-content:center;


}



.check.done{


background:#22c55e;

border-color:#22c55e;

color:white;


}






.content h3{


margin:0;

font-size:16px;


}





.line{


text-decoration:line-through;

opacity:.5;


}





.content p{


margin:5px 0 0;

color:#6b7280;

font-size:14px;


}





.date{


color:#7c3aed !important;

font-weight:600;


}





.badge{


background:#dcfce7;

color:#16a34a;

padding:6px 12px;

border-radius:999px;

font-size:13px;

font-weight:600;


}





.actions{


display:flex;

gap:8px;


}




.actions button{


width:38px;

height:38px;

border-radius:12px;

cursor:pointer;

font-size:16px;

transition:.2s;


}





.edit{


background:#f5f3ff;

color:#7c3aed;

border:1px solid #ddd6fe;


}



.edit:hover{


background:#ede9fe;


}





.delete{


background:#ef4444;

color:white;

border:1px solid #ef4444;


}



.delete:hover{


background:#dc2626;

transform:scale(1.05);


}


</style>