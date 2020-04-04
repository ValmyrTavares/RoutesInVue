<template>
  <div>
      <!-- <h1>Curso Ativo {{curso}}</h1>
        <router-link to="/cursos/HTML">HTML</router-link>
        <router-link to="/cursos/javascript">javascript</router-link>
        <router-link to="/cursos/CSS">CSS</router-link>
        <router-view></router-view> -->

        <h1>Cursos {{lele}}</h1>
        <p>Somos a segunda opção do link</p>
  </div>
</template>

<script>
export default {
    props:["curso"],

    
    created(){
        console.log("Esse componente foi criado")
    },
    computed:{
      lele(){
        return this.$route.params.dinamic
      }
    },
    beforeRouteUpdate(to,from, next){
    next(); 
    
    }

}
</script>

<style>

</style>