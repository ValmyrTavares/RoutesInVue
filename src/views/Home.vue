<template>
<div>
    <h1>Home</h1>
    <div v-if="loading">
        <pageLoading/>
    </div>
    <transition>
        <div class="conteudo" v-if="api">
            <div>
                <h1>Sobre a {{api.titulo}}</h1>
                <p>{{api.descricao}}</p>
                <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>
                <div>
                    <h2>Avaliações</h2>
                    <ul>
                        <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                            <p>{{avaliacao.nome}}</p>
                            <p>{{avaliacao.descricao}}</p>
                        </li>
                    </ul>
                </div>
            </div>

            <img src="../assets/aprender.png" alt="Aprenda">
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


<style scoped>
.btn-cursos{
    border:none;
    background:#4B8;
    border-radius:4px;
    color:white;
    cursor:pointer;
    box-shadow: 4px 2px rgba(0,0,0,.1);
    padding:15px 40px;
    font-size:1rem;
    margin-top:10px;
    margin-bottom:40px;
    font-family:"Avenir",Arial, Helvetica, sans-serif

}
</style>