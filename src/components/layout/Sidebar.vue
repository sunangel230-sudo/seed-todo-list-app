<template>
  <aside class="sidebar">

    <div class="profile">

      <div class="avatar">
        TD
      </div>


      <div
        class="dashboard-title"
        @click="$emit('update:modelValue','all')"
      >

        <h3>
          Todo Dashboard
        </h3>

        <p>
          Manage your tasks
        </p>

      </div>

    </div>



    <nav class="nav">


      <div class="section-title">
        Tasks
      </div>


      <button
        :class="['nav-item', { active: modelValue === 'all' }]"
        @click="$emit('update:modelValue','all')"
      >

        <span>
          📋 All Tasks
        </span>

        <span class="count">
          {{ total }}
        </span>

      </button>




      <button
        :class="['nav-item', { active: modelValue === 'completed' }]"
        @click="$emit('update:modelValue','completed')"
      >

        <span>
          ✅ Completed
        </span>

        <span class="count">
          {{ completed }}
        </span>

      </button>




      <button
        :class="['nav-item', { active: modelValue === 'pending' }]"
        @click="$emit('update:modelValue','pending')"
      >

        <span>
          ⏳ Pending
        </span>

        <span class="count">
          {{ pending }}
        </span>

      </button>




      <div class="divider"></div>



      <div class="section-title">
        Planning
      </div>



      <button
        :class="['nav-item', { active:modelValue==='today' }]"
        @click="$emit('update:modelValue','today')"
      >
        📅 Today
      </button>



      <button
        :class="['nav-item', { active:modelValue==='upcoming' }]"
        @click="$emit('update:modelValue','upcoming')"
      >
        🚀 Upcoming
      </button>



      <button
        :class="['nav-item', { active:modelValue==='important' }]"
        @click="$emit('update:modelValue','important')"
      >
        ⭐ Important
      </button>




      <div class="divider"></div>



      <div class="section-title">
        Projects
      </div>



      <button class="nav-item">
        💼 Work
      </button>


      <button class="nav-item">
        🏠 Personal
      </button>


      <button class="nav-item">
        🎯 Goals
      </button>




      <div class="divider"></div>



      <div class="section-title">
        System
      </div>



      <button class="nav-item">
        ⚙️ Settings
      </button>


      <button class="nav-item">
        ❓ Help
      </button>



    </nav>




    <button
      class="clear-btn"
      @click="$emit('clear-completed')"
    >

      🗑 Clear Completed

    </button>



  </aside>
</template>




<script setup>


defineProps({

  modelValue:{
    type:String,
    default:'all'
  },


  total:{
    type:Number,
    default:0
  },


  completed:{
    type:Number,
    default:0
  },


  pending:{
    type:Number,
    default:0
  }

})



defineEmits([

  'update:modelValue',

  'clear-completed'

])


</script>




<style scoped>


.sidebar{

background:white;

border-right:1px solid #e8eaf2;

padding:25px 18px;

display:flex;

flex-direction:column;

justify-content:space-between;

height:100vh;

}



.profile{

display:flex;

align-items:center;

gap:12px;

margin-bottom:20px;

}



.avatar{

width:45px;

height:45px;

border-radius:50%;

background:#2563eb;

color:white;

display:flex;

align-items:center;

justify-content:center;

font-weight:bold;

font-size:18px;

}



.dashboard-title{

cursor:pointer;

}



.dashboard-title h3{

margin:0;

color:#4b5563;

}



.dashboard-title p{

margin:4px 0 0;

color:#6b7280;

}



.dashboard-title:hover h3{

color:#6d4df8;

}



.nav{

display:flex;

flex-direction:column;

gap:10px;

}



.section-title{

font-size:12px;

color:#9ca3af;

margin-top:10px;

}



.nav-item{

border:0;

background:transparent;

padding:12px;

border-radius:12px;

display:flex;

justify-content:space-between;

cursor:pointer;

}



.nav-item:hover{

background:#f7f5ff;

}



.nav-item.active{

background:#f1edff;

color:#6d4df8;

}



.count{

background:#eee;

padding:3px 8px;

border-radius:10px;

font-size:12px;

}



.divider{

height:1px;

background:#e8eaf2;

margin:10px 0;

}



.clear-btn{

border:0;

background:#fff0f0;

color:#e15555;

padding:12px;

border-radius:12px;

cursor:pointer;

}


</style>