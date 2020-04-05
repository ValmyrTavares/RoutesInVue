<template>
<div>
    <h1>Contatos</h1>
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
    name:"contato",
     mixins:[fetchData],
created(){
    this.fetchData("/contato")
}

}
   

</script>

<style>

</style>