import { supabase } from '../lib/supabase'



// REGISTER USER

export async function register(email, password){


const {data, error} = await supabase.auth.signUp({

email,

password,

options:{

emailRedirectTo:

window.location.origin + '/login'

}

})



if(error) throw error



return data


}





// LOGIN USER

export async function login(email,password){


const {data,error}=

await supabase.auth.signInWithPassword({

email,

password

})



if(error) throw error



return data


}





// LOGOUT USER

export async function logout(){


const {error}=

await supabase.auth.signOut()



if(error) throw error


}





// CHECK CURRENT SESSION

export async function getSession(){


const {data,error}=

await supabase.auth.getSession()



if(error) throw error



return data.session


}





// SEND PASSWORD RESET EMAIL

export async function forgotPassword(email){


const {data,error}=

await supabase.auth.resetPasswordForEmail(

email,

{

redirectTo:

window.location.origin + '/reset-password'

}

)



if(error) throw error



return data


}





// UPDATE PASSWORD

export async function updatePassword(password){


const {data,error}=

await supabase.auth.updateUser({

password

})



if(error) throw error



return data


}