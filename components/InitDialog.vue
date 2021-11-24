<template>
    <div class="">        
        <v-container class="d-flex flex-column"  width="100vw" pa-0 fluid>
            <v-container class="d-flex justify-center" width="100vw" fluid pa-0>            
                <v-img src="images/logo(sm)-min.png" :contain="true" width="100vw"
                    class="logo pa-0">
                </v-img>
            </v-container>
            <v-container class="dialog d-flex flex-column justify-center px-0 pt-lg-5 pt-xs-5" width="100vw" fluid>                
                <div class="d-flex justify-center w-100" >
                    <h1 class="title text-center">Bienvenido</h1>
                </div>
                <div class="d-flex justify-center pt-2 w-100">
                    <p class="text-center">Promovemos el consumo responsable de alcohol e impedimos su venta a menores. Por favor, responde honestamente.</p>
                </div>
                <div class="w-100 d-flex justify-lg-space-between justify-md-center  justify-sm-center justify-xs-center justify-space-between  action-container pt-3 text-center white--text"  >
                    <v-spacer></v-spacer>
                    <OutDialog class="custom1"></OutDialog>                                        
                    <label class="answer text-center" @click='getIn'>SOY MAYOR DE 18 AÑOS</label>
                    <!-- <nuxt-link class="answer text-center white--text" @click="access +=1" to="/home">SOY MAYOR DE 18 AÑOS</router-link> -->
                    
                    <v-spacer></v-spacer>
                </div>                
            </v-container>
             <v-container class="d-flex justify-center agave-container" fluid pa-0>
                <v-img src="images/agave(xs).png" :contain="true"
                    class="agave">
                </v-img>
             </v-container>
        </v-container>                                        
    </div>
</template>
<script>
import OutDialog from '@/components/OutDialog.vue';
export default {
    name: "InitDialog",
    components: { OutDialog },
    data: () => ({
        access: 0,
        // width: 100vw,
        // height: 100vh
    }),
    methods: {
        getIn(){
            this.$router.push("/home");
        }
    },
}
</script>
<style >
.v-application .title{        
        font-family:   "Vani" !important;
        font-size: 2em  !important;
        text-transform: uppercase !important;
    }
.answer{
    text-decoration: none;       
}
.answer:hover{
    /* color: rgba(59, 41, 5, .7); */
    font-weight: bold;
    color:  rgb(232,165,0) ;
    /* linear-gradient(to right, rgb(232,165,0),rgb(59,41,5)) !important; */
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    /* text-transform: ; */            
}
.answer .v-application a:hover{
    
    font-weight: bold;
    color:  rgb(232,165,0);
    /* color: linear-gradient(to right, rgb(232,165,0),rgb(59,41,5)) !important; */
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;    
    
}
.answer:active{            
    font-weight: bold;
    color:  rgb(232,165,0) ;
    /* color: linear-gradient(to right, rgb(232,165,0),rgb(59,41,5)) !important; */
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;    
            
}
/* Desktop */
@media screen {
   @font-face {
    font-family: "Vani";
    font-style: normal;
    font-weight: normal;
    src: url("../static/fonts/Vani.ttf")(truetype);
    overflow: hidden;
}
     .bg-img{                
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: 100vw 100vh;
    }
    .header{
        width: 100vw;
        height: 100vh;
        /* background-image: url("../static/images/header-border(1080p)-min.png"); */
        background-image: url("../static/images/header-border(720pB).png");
        background-size: 100vw 100vh;
    }    
    .dialog{
        position: absolute;    
        top: 27vh;
        z-index:2;
        font-family:   "edwardian_script_itcregular" !important;
        /* width: 5vw; */
        /* height: 87vh;  */
        /* left:0em; */
        color: white;
    }
    .dialog p {
        width: 25vw;
        font-family: Vani;

    }
    .answer{
        /* display: block; */
        width: 8vw;
        cursor: pointer;
    }
    .agave{
            width: 15vw;
            height: 15vh;            
            position: absolute;
            z-index:4;
            /* bottom: 20vh; */
            /* left: 36.6vw; */
            
        }
    .logo{
        width: 20vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:0;
        /* bottom: 20vh; */
        /* left: 36.6vw; */
        
    }
    .action-container{
        width:"50px";
    }
    .v-application .title{        
        font-family:   "Vani" !important;
        font-size: 2em  !important;
        text-transform: uppercase !important;
    }
    .agave-container{
            position:absolute;
            bottom: 20vh;
    }
    
   

}

/* Desktop 4k Lanscape */
/* @media only screen and (max-width: 3840px) and (max-height: 2160px) and (orientation: landscape), 
    only screen and (max-device-width: 3840px) and (max-height: 2160px) and (orientation: landscape){
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
        }
    } */
/* Desktop 2k Lanscape */
/* @media only screen and (max-width: 2560px) and (max-height: 1668px) and (orientation: landscape),
    only screen and (max-device-width: 2560px) and (max-height: 1668px) and (orientation: landscape){
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
        }
    } */
    
/* Iphone X landscape */
@media only screen and (max-width: 2436px) and (max-height: 1125px) and (orientation: landscape), 
only screen and (max-device-width: 2436px) and (max-height: 1125px) and (orientation: landscape){
    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: 100vw 100vh;  
    }
    .logo{
        width: 22vw;
        height: 22vh;            
        position: absolute;
        z-index:4;
        top:1vh;
        /* bottom: 20vh; */
        /* left: 36.6vw; */
        
    }
    .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-border(ipadB).png");
        background-size: 100vw 100vh;
    }
    
    .v-application .title{
        padding-top:4vh;        
        font-size: 3em  !important;        
    }
    .dialog p {
        padding-top: 2vh;
        width: 30vw;
        font-size: 2em;
    }
    
    .answer{
        width: 20vw;        
        font-size: 2em;
        padding-top: 0vh;       
        padding-left: 12vw;       
        padding-right: 0vw;          
    }
    .agave-container{
        position:absolute;
        bottom: 20vh;
    }

    
    
    }
    
/* iPAD landscape */
@media only screen and (max-width: 2388px) and (max-height: 1668px) and (orientation: landscape),
    only screen and (max-device-width: 2388px) and (max-height: 1668px) and (orientation: landscape){
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
        }
        .header{
            width: 100vw;
            height: 100vh;
            background-image: url("../static/images/header-border(ipadB).png");
            background-size: 100vw 100vh;
        }

        .v-application .title{
            padding-top: 0vh;        
            font-size: 3em  !important;        
        }
        .dialog p {
            padding-top: 2vh;
            width: 30vw;
            font-size: 2em;
        }
        .answer{
            width: 20vw;            
            font-size: 2em;
            padding-top: 0vh;       
            padding-left: 12vw;       
            padding-right: 0vw;  
            
        }
        .agave-container{
            position:absolute;
            bottom: 31vh;
        }
        
        
    }   

/* Desktop 1080p Lanscape */
@media only screen and (max-width: 1920px) and (max-height: 1080px) and (orientation: landscape), 
    only screen and (max-device-width: 1920px) and (max-height: 1080px) and (orientation: landscape){        
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
            
        }
        .header{
            width: 100vw;
            height: 100vh;
            /* background-image: url("../static/images/header-border(1080p)-min.png"); */
            background-image: url("../static/images/header-border(720pB).png");
            background-size: 100vw 100vh;
        }    
        .v-application .title{
            padding-top: 0vh;        
            font-size: 3em  !important;        
        }
        .dialog p {
            padding-top: 2vh;
            width: 22vw;
            font-size: 1.5em;
        }
        .answer{
            width: 20vw;
            cursor: pointer;
            font-size: 1.5em;
            padding-top: 0vh;       
            padding-left: 12vw;       
            padding-right: 0vw;  
            cursor: pointer;
            display:block;
        }    
    }



/* Desktop HD phone lanscape */
@media only screen and (max-width: 1600) and (max-height:  768px) and(orientation: landscape), 
    only screen and (max-device-width: 1600px) and (max-device-height:  768px) and (orientation: landscape){                
        .v-application .title{        
            font-size: 1.5em  !important;        
            padding-top: 0vh;
        }
        .dialog{
            top: 18vh;
        }
        .dialog p {            
            width: 25vw;   
            padding: 0;
            margin: 0;
        }                
        .answer{
            width: 18vw;
            font-size: 1em;
            padding-top: 0vh;       
            padding-left: 11vw;       
            padding-right: 0vw;                          
        }
        .logo{
            width: 32vw;
            height: 20vh;                                    
            top:0vh;                        
        }
}
/* Desktop 720p Lanscape */
@media only screen and (max-width: 1366px) and (max-height:  768px) and (orientation: landscape),
    only screen and (max-device-width: 1366px) and (max-height: 768px) and (orientation: landscape){

        .bg-img {     
            width: 100w;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
        }
        .header{
            width: 100vw;
            height: 100vh;
            /* background-image: url("../static/images/header-border(720p)-min.png"); */
            background-image: url("../static/images/header-border(720pB).png");
            background-size: 100vw 100vh;
        }
        .v-application .title{        
            font-size: 2em  !important;        
            padding-top: 4vh;
        }
        .dialog p {
            padding-top: 2vh;
            width: 30vw;
            font-size: 1em;
            /* font-family: Vani; */
        }        
        .answer{
            width: 20vw;            
            font-size: 1em;
            padding-top: 0vh;       
            padding-left: 12vw;       
            padding-right: 0vw;                          
        }
        .logo{
            width: 25vw;
            height: 25vh;                                    
            top:0vh;
                    
        }
         
}

/* Iphone 5 Lanscape */
@media only screen and (max-width: 1136px) and (max-height:  640px) and (orientation: landscape),
    only screen and (max-device-width: 1136px) and (max-height: 640px) and (orientation: landscape){
    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: 100vw 100vh;  
    }
    .header{
        width: 100vw;
        height: 100vh;
        /* background-image: url("../static/images/header-border(720p)-min.png"); */
        background-image: url("../static/images/header-border(720pB).png");
        background-size: 100vw 100vh;
    }
    .v-application .title{        
        /* font-size: 2em  !important;         */
        padding-top: 5vh;
    }
    .dialog p {            
        width: 30vw;            
    }        
    .answer{
        width: 21vw;
        padding-top: 0vh;       
        padding-left: 12vw;       
        padding-right: 0vw;  
        font-size: 1em;
    }
    .logo{
        width: 25vw;
        height: 25vh;                                    
        top:1vh;                        
    }
}

/* Desktop SD tablet lanscape */
@media only screen and (max-width: 1024px) and (max-height:  768px) and (orientation: landscape), 
    only screen and (max-device-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
        }
        .header{
            width: 100vw;
            height: 100vh;
            background-image: url("../static/images/header-border(SDB).png");
            background-size: 100vw 100vh;
        }
        .v-application .title{        
            font-size: 1.5em  !important;        
            padding-top: 9vh;
        }
        .dialog p {            
            width: 55vw;            
        }        
        .answer{
            width: 25vw;            
            font-size: 1em;
            padding-top: 0vh;       
            padding-left: 13vw;       
            padding-right: 0vw;          
        }
        .logo{
            width: 40vw;
            height: 30vh;                                    
            top:1vh;                        
        }
}


/* small phone landscape  */
@media only screen and (max-width:  640px) and (max-height:  360px) and (orientation: landscape), 
    only screen and (max-device-width: 640px) and (max-height: 360px) and (orientation: landscape){
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: 100vw 100vh;  
        }
        .header{
            width: 100vw;
            height: 100vh;
            /* background-image: url("../static/images/header-border(720p)-min.png"); */
            background-image: url("../static/images/header-border(720pB).png");
            background-size: 100vw 100vh;
        }
        .agave-container{
            position:absolute;
            bottom: 20vh;
        }            
        .answer{
            width:27vw;            
            font-size: 1em;
            padding-top: 0vh;       
            padding-left: 12vw;       
            padding-right: 0vw;                          
        }
    }

/*Portrait */


/* small phone portrait*/

@media only screen and (min-width: 360px)  and (orientation: portrait),
    only screen and (min-device-width: 360px)  and (orientation: portrait){
/* @media only screen and (max-width: 360px) and (max-height: 640px) and (orientation: portrait),
    only screen and (max-device-width: 360px) and (max-height: 640px) and (orientation: portrait){*/

    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: cover;
    }
    .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-borderV(720pB).png");
        background-size: 100vw 140vh;  
        padding-top: 10vh !important;                                                          
    }
    .logo{
        width: 73vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:1vh;            
    }
    .v-application .title{
        padding-top: 0;        
        font-size: 1.2em  !important;        
    }
        .agave{
        width: 20vw;
        height: 10vh;            
        position: absolute;
        z-index:4;        
        /* bottom: 0vh;                         */
    }
    .agave-container{
        position:absolute;
        bottom: 36vh;
    }
    .dialog{
        top: 20vh;
    }
    .dialog p {
        padding-top: 0;
        width: 98vw;
        font-size: 1em;            
    }    
    .answer{
        width: 38vw;
        font-size: 1em;
        padding-left: 8vw;       
        padding-right: 0vw;  
        cursor: pointer;
    } 
    .custom1{
        padding-left: 7vw !important;       
        padding-right: 7vw !important;  
    }
}

/* iphone 5 portrait */
@media only screen and (min-width: 640px)  and (orientation: portrait),
    only screen and (min-device-width: 640px) and (orientation: portrait){
    /* @media only screen and (min-width: 640px)  and (min-height: 1136px) and (orientation: portrait),
    only screen and (min-device-width: 640px) and (min-device-height: 1136px) and (orientation: portrait){ */

    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: cover;
    }    
   .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-borderV(720pB).png");
        background-size: 100vw 140vh;  
        padding-top: 10vh !important;                                                          
    }
    .logo{
        width: 60vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:0vh;                  
    }
    .v-application .title{
        padding-top: 10vh;        
        font-size: 1.5em  !important;        
    }
    .agave{
        width: 15vw;
        height: 15vh;            
        position: absolute;
        z-index:4;
        bottom: 20vh;            
    }
    .dialog{
        top:8vh;
    }
    .dialog p {
        padding-top: 3vh;            
        padding-bottom: 2vh;
        width: 70vw;
        font-size: 1.2em;            
    }    
    .answer{
        display: block ;
        width: 22vw;
        font-size: 1em;
        padding-left: 6.7vw;       
        /* padding-right: 7vw;   */
        cursor: pointer;
    }     
    .agave-container{
        position:absolute;
        bottom: 12vh;
    }
}

/* mobile btter resolution portrait */
@media only screen and (min-width: 720px)  and (orientation: portrait),
    only screen and (min-device-width: 720px) and (orientation: portrait){

    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: cover;
    }    
    .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-borderV(720pB).png");
        background-size: 100vw 140vh;  
        padding-top: 10vh !important;                                                          
    }
    .logo{
        width: 60vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:0vh;                  
    }
    .v-application .title{
        padding-top: 10vh;        
        font-size: 1.5em  !important;        
    }
    .agave{
        width: 15vw;
        height: 15vh;            
        position: absolute;
        z-index:4;
        bottom: 20vh;            
    }
    .dialog{
        top:8vh;
    }
    .dialog p {
        padding-top: 3vh;            
        padding-bottom: 2vh;
        width: 50vw;
        font-size: 1.2em;            
    }    
    .answer{
        display: block ;
        width: 28vw;
        font-size: 1em;
        padding-left: 14vw;       
        padding-right: 0vw;  
        cursor: pointer;
    }        
}

/* mobile btter resolution portrait */
@media only screen and (min-width: 768px)  and (orientation: portrait),
    only screen and (min-device-width: 768px) and (orientation: portrait){

    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: cover;
    }    
    .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-borderV(720pB).png");
        background-size: 100vw 140vh;  
        padding-top: 10vh !important;                                                          
    }
    .logo{
        width: 60vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:0vh;                  
    }
    .v-application .title{
        padding-top: 10vh;        
        font-size: 1.5em  !important;        
    }
    .agave{
        width: 15vw;
        height: 15vh;            
        position: absolute;
        z-index:4;
        bottom: 20vh;            
    }
    .dialog{
        top:8vh;
    }
    .dialog p {
        padding-top: 3vh;            
        padding-bottom: 2vh;
        width: 50vw;
        font-size: 1.2em;            
    }    
    .answer{
        display: block ;
        width: 28vw;
        font-size: 1em;
        padding-left: 14vw;       
        padding-right: 0vw;  
        cursor: pointer;
    }        
}
/*iphone x portrait  */
@media only screen and (min-width: 1125px)  and (orientation: portrait), 
    only screen and (min-device-width: 1125px)  and (orientation: portrait){
    /* @media only screen and (max-width: 1125px) and (max-height: 2436px) and (orientation: portrait), 
        only screen and (max-device-width: 1125px) and (max-height: 2436px) and (orientation: portrait){ */
    .bg-img {     
        width: 100vw;
        height: 100vh;            
        background-image: url("../static/images/bg-dialog.jpg");
        background-size: cover;
    }
    .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-borderV(720pB).png");
        background-size: 100vw 140vh;  
        padding-top: 10vh !important;                                                          
    }
    .logo{
        width: 60vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:0vh;                  
    }
    .v-application .title{
        padding-top: 10vh;        
        font-size: 3em  !important;        
    }
    .agave{
        width: 15vw;
        height: 15vh;            
        position: absolute;
        z-index:4;
        bottom: 20vh;            
    }
    .dialog{
        top:8vh;
    }
    .dialog p {
        padding-top: 3vh;            
        padding-bottom: 2vh;
        width: 50vw;
        font-size: 2em;            
    }    
    .answer{
        display: block ;
        width: 31vw;
        font-size: 2em;
        padding-top: 0vh;       
        padding-left: 14vw;       
        padding-right: 0vw;  
        cursor: pointer;
    }        
}
/* ipad portrait */
@media only screen and (min-width: 1668px)  and (orientation: portrait),
    only screen and (min-device-width: 1668px)  and (orientation: portrait){
        .bg-img {     
            width: 100vw;
            height: 100vh;            
            background-image: url("../static/images/bg-dialog.jpg");
            background-size: cover;
        }
        .header{
        width: 100vw;
        height: 100vh;
        background-image: url("../static/images/header-borderV(720pB).png");
        background-size: 100vw 140vh;  
        padding-top: 10vh !important;                                                          
    }
    .logo{
        width: 60vw;
        height: 20vh;            
        position: absolute;
        z-index:4;
        top:0vh;                  
    }
    .v-application .title{
        padding-top: 10vh;        
        font-size: 3em  !important;        
    }
    .agave{
        width: 15vw;
        height: 15vh;            
        position: absolute;
        z-index:4;
        bottom: 20vh;            
    }
    .dialog{
        top:8vh;
    }
    .dialog p {
        padding-top: 3vh;            
        padding-bottom: 2vh;
        width: 34vw;
        font-size: 2em;            
    }    
    .answer{
        display: block ;
        width: 26vw;
        font-size: 2em;
        padding-top: 0vh;       
        padding-left: 14vw;       
        padding-right: 0vw;  
        cursor: pointer;
    }     
}

</style>

