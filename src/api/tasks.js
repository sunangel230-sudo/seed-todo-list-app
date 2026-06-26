import { supabase } from '../lib/supabase'





// GET ALL USER TASKS

export async function getAllTasks(){


const {data:userData}=

await supabase.auth.getUser()



const user = userData.user



const {data,error}=

await supabase

.from('tasks')

.select('*')

.eq(

'user_id',

user.id

)

.order(

'created_at',

{

ascending:false

}

)



if(error) throw error



return data


}








// ADD TASK

export async function addTask(task){


const {data:userData}=

await supabase.auth.getUser()



const user=userData.user



const {data,error}=

await supabase

.from('tasks')

.insert({

...task,

user_id:user.id

})

.select()

.single()



if(error) throw error



return data


}








// EDIT TASK

export async function editTask(id,updatedTask){


const {data,error}=

await supabase

.from('tasks')

.update(updatedTask)

.eq(

'id',

id

)

.select()

.single()



if(error) throw error



return data


}








// COMPLETE TASK

export async function markTaskAsDone(id){



const {data:task,error:getError}=

await supabase

.from('tasks')

.select('completed')

.eq(

'id',

id

)

.single()



if(getError) throw getError





const {data,error}=

await supabase

.update({

completed:!task.completed

})

.eq(

'id',

id

)

.select()

.single()



if(error) throw error



return data


}








// DELETE TASK

export async function deleteTask(id){


const {error}=

await supabase

.from('tasks')

.delete()

.eq(

'id',

id

)



if(error) throw error



return true


}