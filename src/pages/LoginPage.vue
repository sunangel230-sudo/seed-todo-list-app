<template>

<div class="page">

<LoginForm />

</div>

</template>



<script setup>

import LoginForm from '../components/auth/LoginForm.vue'

</script>



<style scoped>

.page{

min-height:100vh;

display:grid;

place-items:center;

background:#f5f6fb;

}

</style>