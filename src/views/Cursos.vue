<template>
  <div>
      <h1>Curso Ativo {{curso}}</h1>
        <router-link to="/cursos/HTML">HTML</router-link>
        <router-link to="/cursos/javascript">javascript</router-link>
        <router-link to="/cursos/CSS">CSS</router-link>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    props:["curso"],

    
    created(){
        console.log("Esse componente foi criado")
    },
    beforeRouteUpdate(to,from, next){
    next(); 
    
    }

}
</script>

<style>

</style>