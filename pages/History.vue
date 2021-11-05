<template>
<v-container fluid pa-0>
    <v-container  class="bg-history" fluid pa-0>
        <NavBar />
    <v-container class="p-container white--text d-flex align-items-center justify-center" height="100vh">
        <div class="paragraph d-flex  flex-wrap pa-4 justify-center w-100">
        <p>
        <span class="text-center d-block">En su interminable búsqueda</span>
        <span class="text-center d-block"> por las cosas buenas de la vida,</span>
        <span class="text-center d-block"> Samuel Ferrer Adelan finalmente</span>
        <span class="text-center d-block"> encontró en México</span>
        <span class="text-center d-block"> algo tan cautivante que lo hizo querer compartirlo</span>
        <span class="text-center d-block"> con todo el mundo. El tequila.</span>        
        
        <span class="text-center d-block pt-4">Con agave crecido en las tierras</span>
        <span class="text-center d-block"> de los Altos de Jalisco</span>
        <span class="text-center d-block"> y hecho con piñas selectas</span>
        <span class="text-center d-block"> cuidadosamende por manos</span>
        <span class="text-center d-block"> de campesinos mexicanos,</span>
        <span class="text-center d-block"> el tequila SFA Adelan</span>
        <span class="text-center d-block"> cuenta con el sabor y textura ideal</span>
        <span class="text-center d-block"> para enamorar a cualquiera.</span>        
        </p>
        </div>
    </v-container>
    </v-container>
</v-container>    
</template>
<script>
import NavBar from '@/components/NavBar';
export default {
    name: "History",
    components: { NavBar },
     data: () => ({
        access: 0,
        // width: 100vw,
        hContainer: "100vh",
    }),
}
</script>
<style scoped>    
    .paragraph{
        background-color: rgba(13, 41, 72, .7);        
    }
    .bg-history{
        /* background: black; */
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/bg-history.jpg");
        /* background-size: contain; */
        background-size: 100vw 100vh;
    }
         
    @media (min-width:320px)  { 
        /* smartphones, iPhone, portrait 480x320 phones */ 
        .p-container{
            height: 100vh;
            display: flex;
            align-items: center;
        }
        .paragraph{
            width: 80vw;
            padding-right: 0vw !important;
            padding-left: 0vw  !important;
            height: 53vh;
            margin-right: 0vw !important;
        }
        .bg-history{
        /* background: black; */
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/bg-history(sm).png");
        background-size: 100vw 100vh;
    
        }
    }
    @media (min-width:481px)  { 
        /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
        .p-container{            
            width:100vw;            
            display: flex;
            align-items: center;
            justify-content: center !important;    
        }
        .paragraph{
            width: 40vw;
            height: 45vh;
            padding-right: 0vw !important;
            margin-right: 0vw !important;
            padding-left: 0vw  !important;
        }
        
    
    }
    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ 
    @media (min-width:641px)  {
        .p-container{
            height: 100vh;
            width:100vw;            
            display: flex;
            align-items: center;
            justify-content: flex-end !important;            
        }
        .paragraph{
            width: 50vw;
            height: 20em;
            text-align: center;
            padding-right: 2vw !important;
            margin-right: 3vw !important;
            padding-left: 2vw  !important;            
        }
        .paragraph p span{
            display: inline !important;
            text-align: center;

        }
        .bg-history{        
            width: 100vw;
            height: 100vh;
            background-image: url("../static/images/bg-history.jpg");           
            background-size: 100vw 100vh;
        }
    
    }
    /* tablet, landscape iPad, lo-res laptops ands desktops */ 
    @media (min-width:961px)  { 
        .p-container{
            height: 100vh;
            width:100vw;            
            display: flex;
            justify-content: flex-end !important;
            align-items: center !important;
        }
        .paragraph{
            margin-top: 20vh;
            margin-right: 0vw !important;
            padding-right: 0vw !important;
            padding-left: 0vw  !important;
            width: 50vw;
            height: 80vh;                        
        }
           .paragraph p span{            
            display: flex !important;
            justify-content: center;            
        }
    }
    @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ 
        .p-container{
            height: 100vh;
            width:100vw;
            /* background-color: blue !important; */
            display: flex;
            justify-content: flex-end !important;
            align-items: center !important;
        }
        .paragraph{
            margin-top: 35vh;
            margin-right: 0vw !important;
            padding-right: 0vw !important;
            padding-left: 0vw  !important;
            width: 42vw;
            font-size: 1em !important;
            height: 65vh;
            
        }
    }
    @media (min-width:1281px) { /* hires laptops and desktops */
        .p-container{
            height: 100vh;
            width:100vw;
            /* background-color: blue !important; */
            display: flex;
            justify-content: flex-end !important;
            align-items: center !important;
        }
        .paragraph{
            margin-top: 35vh;
            margin-right: 0vw !important;
            padding-right: 0vw !important;
            padding-left: 0vw  !important;
            width: 35vw;
            font-size: 1em !important;
            height: 65vh;
            
        }
    }
    @media screen and (min-width: 1904.1px){
            .p-container{
            height: 100vh;
            width:100vw;
            /* background-color: blue !important; */
            display: flex;
            justify-content: flex-end !important;
            align-items: center !important;
        }
        .paragraph{
            margin-top: 35vh;
            margin-right: 10vw !important;
            padding-left: 0vw  !important;
            width: 32vw;
            font-size: 1.5em !important;
            height: 65vh;
            /* paddin-g: .5em !important;  */
        }
    }
    
</style>