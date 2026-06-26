<template>


<div class="loader">


<div class="spinner"></div>


<p>

Loading...

</p>


</div>


</template>





<style scoped>


.loader{


height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

gap:15px;

background:#f5f6fb;


}



.spinner{


width:45px;

height:45px;

border:5px solid #ddd;

border-top-color:#6d4df8;

border-radius:50%;

animation:spin 1s linear infinite;


}



@keyframes spin{


to{

transform:rotate(360deg);

}


}



</style>