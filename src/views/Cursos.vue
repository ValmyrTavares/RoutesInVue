<template>
  <div>
      <!-- <h1>Curso Ativo {{curso}}</h1>
        <router-link to="/cursos/HTML">HTML</router-link>
        <router-link to="/cursos/javascript">javascript</router-link>
        <router-link to="/cursos/CSS">CSS</router-link>
        <router-view></router-view> -->
         <router-link to="/cursos/ContraPonto">CounterPoint</router-link>
         <router-link to="/cursos/Harmonia">Harmonia</router-link>
          <router-link to="/cursos/Canto">Canto</router-link>
         
           <router-view></router-view>

        <h1>Cursos {{dinamic}}</h1>
        <p>Somos a segunda opção do link</p>
  </div>
</template>

<script>
export default {
    props:["dinamic"],

    
    // computed:{
    //   opcaoCursos(){
    //     return this.$route.params.dinamic
    //   }
    //  },

    created(){
        console.log("Esse componente foi criado")
    },
     
    
    beforeRouteUpdate(to,from,next){
      console.log("Esse fetch foi feito")
      next();
    
    
    }

}
</script>

<style>

</style>