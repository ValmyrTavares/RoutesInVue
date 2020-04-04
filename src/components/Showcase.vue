<template>
<div>
    {{vitrine}}
 <div v-for="item in vitrine" :key="item.id">
     <p>{{item.nome}}</p>
 </div>
</div>
</template>

<script>
export default {
name:"ShowCase",
data(){
    return{
       
        nome:"Valmyr Tavares",
        vitrine:{}

    }
},
methods:{
    fetchShowcase(){
         fetch('http://www.mocky.io/v2/5e874ed9310000588b81a558')
         .then((r)=> r.json())
         .then((res)=>this.vitrine = res)
        }
       
},
created(){
   this.fetchShowcase()
}
}

</script>

<style>

</style>