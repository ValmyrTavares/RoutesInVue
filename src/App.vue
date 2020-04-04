<template>
  <div id="app">
    <h1>teste</h1>
    <p>{{acao}}</p>

    <router-link to="/">Home</router-link>
    <router-link to="/descricao">Descrição</router-link>
    <router-link to="/aulinhas">Aulitas</router-link>
    <router-link to="/cursos">Cursos</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      acao: null,
    };
  },
  // methods: { 
    
  //   async puxarAcao() {
      
  //     // this.loading = true;
  //     const result = await fetch(
  //        `http://www.mocky.io/v2/5e88746e310000a8923f495a`
  //     );
  //     this.acao = await result.json();
  //   },
  // },
  // created() {
  //   this.puxarAcao();
  // },
};
</script>

<style>
a + a {
  padding: 10px;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color:#234;
  border:4px solid;
  margin:20px;
  padding: 20px;
}
 nav{
   padding: 20px 0;
 } 

a{
 text-decoration: none;

}
.router-link-exact-active{
  color:red;
  font-size:22px
}  */
</style>
