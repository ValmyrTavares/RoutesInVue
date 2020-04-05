<template>
<div>
    <h1>Home</h1>
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
name:"home",
mixins:[fetchData],
created(){
    this.fetchData("/home")
}

}
</script>


<style>

</style>