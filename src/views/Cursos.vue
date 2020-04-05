<template>
<div>
  <h1>Cursos</h1>
  <div v-if="loading">
        <pageLoading/>
    </div>
   <transition>
    <div v-if="api">
        <p>{{api}}</p>
    </div>
   </transition>
</div>

</template>

<script>
import fetchData from '@/mixins/fetchData.js'

export default {
    name:"Cursos",
    mixins:[fetchData],
    created(){
      this.fetchData("/cursos")
    }

}
</script>

<style>

</style>