<template>  
<div>
    <Header text="Nuestra historia" color="green" />      
    <v-container class="bg-history white--text d-flex align-center justify-center" fluid>            
            <div class=" paragraph  d-flex flex-wrap pa-4 justify-center align-center mx-16">                            
                    <p>El señor Samuel Ferrer Adelan ha dedicado gran parte de su vida en explorar y encontrar las mejores cosas de la vida para así poder compartirlas con sus amigos y seres queridos.</p>
                    <p>Entre su constante búsqueda por las mejores cosas de la vida, el señor Samuel llegó a México sin saber que estando aquí, se tropezaría con una de las bebidas espirituosas más deliciosas del mundo. Hablamos de nada más y nada menos que la mismísima bebida de los dioses, “El tequila”. </p>
                    <p>El señor al recorrer varias rancherías y degustando diferentes tipos de tequila. Probó un tequila tan delicioso que se quedó impactado, y lo único en lo que podía pensar era en que tenía que hacer para poder compartir esta increíble bebida con todos.</p>
                    <p>Aquí es cuando surgió la magnífica idea de tequila Adelan. Siendo  que ahora es uno de los tequilas más solicitados en algunos países del continente asiático, como Filipinas.</p>
                    <p>Este tequila es producido con agave azul crecido en las tierras de Los Altos Jalisco y hecho con piñas de la más alta calidad, escogidas a mano para así mantener un control de calidad inigualable. Gracias a este delicado proceso nuestro tequila refleja un sabor y una textura tan deliciosa que después del primer trago quedarán fascinados y entenderán lo que el señor Sam siento y estamos seguros que ustedes también querrán compartirlo con todos sus seres queridos.</p>                    
            </div>
        </v-container>
</div>


</template>
<script>
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
export default {
    name: "History",
    components: { NavBar, Header},
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
        width: 100vw;
    }
    .bg-history{        
        background-image: url("../static/images/bg-history.jpg");        
        background-size: 100% 100%;
    }

    @media (min-width:320px)  { 
    /* smartphones, iPhone, portrait 480x320 phones */ 
        
        .paragraph{
            width: 80vw;        
            max-height: 53vh;
            margin-right: 0vw !important;            
            margin-left: 0vw !important;            
            text-overflow: clip;   
            overflow-y: scroll;
        }
        .bg-history{        
            background-image: url("../static/images/bg-history(sm).png");
            background-size: 100vw ;
            max-height: 60vh; 
            text-overflow: clip;   
            overflow-y: hidden;
        }
    }
    @media (min-width:961px)  { 
    .paragraph{
        width: 80vw;                        
        max-height: 90vh;              
        height: 60vh;
        text-overflow: clip;   
        overflow-y: scroll;
    }
    .bg-history{        
        background-image: url("../static/images/bg-history.jpg");        
        max-height: 90vh;       
        height: 80vh;       
        background-size: 100% 90vh;
    }
    }
    
</style>