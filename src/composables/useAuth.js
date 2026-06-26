import { ref } from 'vue'

import {
  login,
  register,
  logout,
  getSession,
  forgotPassword,
  updatePassword
} from '../api/auth'


const user = ref(null)

const loading = ref(false)

const error = ref(null)



export function useAuth(){


async function signIn(email,password){

  loading.value = true

  error.value = null


  try{

    const response = await login(
      email,
      password
    )


    user.value = response.user


    return response


  }catch(err){

    error.value = err.message

    throw err


  }finally{

    loading.value = false

  }

}







async function signUp(email,password){


  loading.value = true

  error.value = null



  try{


    return await register(
      email,
      password
    )


  }catch(err){


    error.value = err.message

    throw err


  }finally{


    loading.value = false


  }


}







async function signOut(){


  await logout()


  user.value = null


}







async function checkUser(){


  const session = await getSession()



  if(session){


    user.value = session.user


  }


  return session


}








async function resetPassword(email){


  return await forgotPassword(email)


}







async function changePassword(password){


  return await updatePassword(password)


}







return {


  user,

  loading,

  error,


  signIn,

  signUp,

  signOut,

  checkUser,

  resetPassword,

  changePassword


}


}