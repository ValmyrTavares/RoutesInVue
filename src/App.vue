<template>
  <div id="app">
    <h1>teste</h1>
  <p>{{acao}}</p>
    
   
  </div>

</template>

<script>


export default {
  name: 'App',
 data(){
    return{
        acao:null
    }
},
methods: {
    puxarAcao() {
      // this.loading = true;
      this.acao = null;
      fetch(`http://www.mocky.io/v2/5e88746e310000a8923f495a`)
        .then(r => r.json())
        .then(r => {
          this.acao = r;
          // this.loading = false;
        });
    }
  },
  created() {
    this.puxarAcao();
  },

}

</script>
   
     
       
       



<style>
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
a + a{
  padding:10px;
}
.router-link-exact-active{
  color:red;
  font-size:22px
}  */
</style>
