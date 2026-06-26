<template>

<div>


<PageLoader v-if="loading" />


<RouterView v-else />


</div>


</template>



<script setup>


import { ref, onMounted } from 'vue'


import PageLoader from './components/layout/PageLoader.vue'


import { useAuth } from './composables/useAuth'



const loading = ref(true)



const {

checkUser

} = useAuth()





onMounted(async()=>{


await checkUser()


loading.value = false


})


</script>