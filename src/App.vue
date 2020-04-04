<template>
  <div id="app">
    <h1>teste</h1>
  <p>{{vitrine}}</p>
    
   
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
     },data(){
    return{
        vitrine:null
    }
},
methods:{
  puxarFetch(){
    axios.get("http://www.mocky.io/v2/5e88746e310000a8923f495a")
    .then(r => {
      this.vitrine = r.data
      console.log(r.data)
    })
  },
  created(){
    this.puxarFetch();
    console.log(this.vitrine)
  }

}
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
