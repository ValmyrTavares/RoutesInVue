import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Cursos from './views/Cursos.vue'
import descr from './views/CursoDescricao.vue'
import Aulinhas from './views/CursoAulas.vue'
import curinga from './views/Curinga.vue'
// import Home from './views/Home.vue'
// import Cursos from './views/Cursos.vue'
// import Curso from './views/Curso.vue'
// import CursoAulas from './views/CursoAulas.vue'
// import CursoDescricao from './views/CursoDescricao.vue'


Vue.use (Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path: "/", component: Home
        },
        {
            path: "/cursos",
             component: Cursos,
             props:true,
             children:[
                {
                    path: ":dinamic",
                     component: Cursos,
                    
                   
                }
               
             ]
        },
       
        {
            path: "/descricao",
             component: descr,
            
             children:[
                 {
                     path: "/descricao/curinga",
                     component:curinga
                 },
                 {
                    path:"/descricao/aulinhas",
                     component: Aulinhas
                }
                 
             ]
        },
        {
            path: '/aulinhas',
             component: Aulinhas,
             children:[
                 {
                    path: "/aulinhas/cursos",
                    component: Cursos,
                 }
             ]
        } 

        // {
        //     path: "/", component: Home
        // },
        // { 
        //     path: '/cursos/',
        //     component: Cursos,
        //     props: true,
        //     children:[
        //         { 
        //             path: ':curso',
        //             component: Curso,
        //             props: true,
        //             children:[
        //                 {   name:'aulas',
        //                     path:"aulas",
        //                     component:CursoAulas
        //                 },
        //                 {   name:"descricao",
        //                     path:"descricao",
        //                     component:CursoDescricao
        //                 }
        //     ]
        //          }
        //     ]

        //  },
     
    ]
})