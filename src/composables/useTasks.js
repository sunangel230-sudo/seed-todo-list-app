import { ref } from 'vue'
import { supabase } from '../lib/supabase'


const tasks = ref([])



export function useTasks(){



async function loadTasks(){


  const { data:{ user }, error:userError } = 
    await supabase.auth.getUser()



  if(userError || !user){

    console.log("No user logged in")

    return

  }




  const { data, error } = await supabase

    .from('tasks')

    .select('*')

    .eq('user_id', user.id)

    .order('created_at', { ascending:false })




  if(error){

    console.log(error)

    throw error

  }




  tasks.value = data



}








async function addTask(title){



  const { data:{ user }, error:userError } =

    await supabase.auth.getUser()




  if(userError || !user){

    throw new Error("User not logged in")

  }






  const { data, error } = await supabase

    .from('tasks')

    .insert({

      user_id: user.id,

      title: title,

      subtitle: '',

      completed: false,

      due_date: null

    })

    .select()

    .single()






  if(error){

    console.log(error)

    throw error

  }






  tasks.value.unshift(data)





}










async function updateTask(id, updatedTask){



  const { data, error } = await supabase

    .from('tasks')

    .update(updatedTask)

    .eq('id', id)

    .select()

    .single()





  if(error){

    console.log(error)

    throw error

  }






  const index = tasks.value.findIndex(

    task => task.id === id

  )





  if(index !== -1){

    tasks.value[index] = data

  }




}









async function deleteTask(id){



  const { error } = await supabase

    .from('tasks')

    .delete()

    .eq('id', id)





  if(error){

    console.log(error)

    throw error

  }






  tasks.value = tasks.value.filter(

    task => task.id !== id

  )



}









return {


  tasks,


  loadTasks,


  addTask,


  updateTask,


  deleteTask


}




}