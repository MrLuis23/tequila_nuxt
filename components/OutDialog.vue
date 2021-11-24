<template>
  <!-- <v-row justify="space-around">   -->
    <v-col cols="auto pa-0 main-container d-flex align-items-center ma-auto  text-center" >
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          
          <label color="primary"
            v-bind="attrs"
            v-on="on" class="answer text-center pa-0">SOY MENOR DE 18 AÑOS</label>
        </template>
        <template v-slot:default="">
          <v-card class="modal" with="">
            <!-- <v-toolbar
              color="primary"
              dark
            >Opening from the top</v-toolbar> -->
            <v-card-text class="black--text text-center pt-lg-4 pt-md-4 pt-sm-3">
              <div class="px-md-16 px-sm-1 text-lg-h4 text-md-h4 text-sm-h5 text-center portrait-title">                
                Gracias por su interés
                <v-spacer></v-spacer>
              </div>
              <div class="px-md-16  px-sm-1 w-100 text-lg-h5  text-md-h6 text-sm-h6 text-center portrait-title2">
                <v-container class="d-flex justify-center py-0">
                  pero de momento no tienes edad para acceder a este sitio.
                </v-container>                
              </div>
              
              <div class="subtitle-modal w-100 text-md-h6 text-sm-subtitle-1  pt-3">Si deseas conocer más acerca de nuestros productos,  te invitamos a seguir nuestras redes sociales.</div>
              <v-container class="pt-61">
                <v-btn
                  class="mx-2"
                  fab
                  color="transparent"
                  small
                  >
                  <v-icon x-large color="black"> 
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn
                  class="mx-2"
                  fab                  
                  small
                  color="transparent"
                  >
                  <v-icon x-large color="black">
                    mdi-instagram
                  </v-icon>
                </v-btn>
                <v-btn
                  class="mx-2"
                  fab                  
                  small
                  color="transparent">
                  <v-icon dark x-large color="black">
                    mdi-youtube
                  </v-icon>
                </v-btn>
                
                
              </v-container>
            </v-card-text>
             <!-- <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
                class="white--text pa-0"
              >Cerrar</v-btn>
            </v-card-actions> -->
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  <!-- </v-row> -->
</template>
<script>
export default {
    name: "OutDialog",
    data: () => ({
        
    }),
}
</script>
<style scoped>
/* General*/
    /* .v-application .text-sm-h5 {   */
    .v-application .text-sm-h5,  .v-application .text-sm-h6,
    .v-application .text-lg-h4, .v-application .text-md-h4, .v-application .text-md-h4,
    .v-application .text-md-h6, .v-application .text-sm-subtitle-1,
    .v-application button{
      /* height:auto;   */
      font-family: "Vani" !important;
      font-weight: 800 !important;

    }
    label{    
      width: 8vw;
    }  
    .v-card{
      border-style: solid;
      border-width: 6px;
      /* border-color: rgb(232,165,0) !important; */
      border-image: linear-gradient(to right, rgb(232,165,0),rgb(59,41,5));
      border-image-slice: 1;
    }
    .modal{
      /* background-color: rgba(46,45, 44) !important; */
      background-image: linear-gradient(to right, rgb(232,165,0),rgb(59,41,5));

    }
/*End General */
  .title-modal{
    width: 38vw;
  }
  .subtitle-modal{
    width: 39vw;
  }
  

/* Iphone X landscape */
@media only screen and (max-width: 2436px) and (max-height: 1125px) and (orientation: landscape), 
only screen and (max-device-width: 2436px) and (max-height: 1125px) and (orientation: landscape){
      .title-modal{
        width: 29vw;
      }
      .subtitle-modal{
        width: 100%;
      }    
    }
    
/* iPAD landscape */
@media only screen and (max-width: 2388px) and (max-height: 1668px) and (orientation: landscape),
    only screen and (max-device-width: 2388px) and (max-height: 1668px) and (orientation: landscape){
          .title-modal{
        width: 29vw;
      }
        .subtitle-modal{
          width: 100%;
        }
        
        
    }   

/* Desktop 1080p Lanscape */
@media only screen and (max-width: 1920px) and (max-height: 1080px) and (orientation: landscape), 
    only screen and (max-device-width: 1920px) and (max-height: 1080px) and (orientation: landscape){        
      .title-modal{
        width: 29vw;
      }
        .subtitle-modal{
          width: 100%;
        }
    }


/* Desktop HD phone lanscape */
@media only screen and (max-width: 1600) and (max-height:  768px) and(orientation: landscape), 
    only screen and (max-device-width: 1600px) and (max-device-height:  768px) and (orientation: landscape){
    .main-container{
      width: 6vw;  
    }
    label{      
      width: 6vw;
    }
}
/* Desktop 720p Lanscape */
@media only screen and (max-width: 1366px) and (max-height:  768px) and (orientation: landscape),
    only screen and (max-device-width: 1366px) and (max-height: 768px) and (orientation: landscape){
   .main-container{
      width: 8vw;  
    }
    label{      
      width: 8vw;
    }                 
}

/* Iphone 5 Lanscape */
@media only screen and (max-width: 1136px) and (max-height:  640px) and (orientation: landscape),
    only screen and (max-device-width: 1136px) and (max-height: 640px) and (orientation: landscape){
    .main-container{
      width: 9vw;  
    }
    label{      
      width: 9vw;
    }        
}

/* Desktop SD tablet lanscape */
@media only screen and (max-width: 1024px) and (max-height:  768px) and (orientation: landscape), 
    only screen and (max-device-width: 1024px) and (max-height: 768px) and (orientation: landscape){
    .main-container{
      width: 13vw;  
    }
    label{      
      width: 13vw;
    }        
}


/* small phone landscape  */
@media only screen and (max-width:  640px) and (max-height:  360px) and (orientation: landscape), 
    only screen and (max-device-width: 640px) and (max-height: 360px) and (orientation: landscape){
    .main-container{
      width: 15vw;  
    }
    label{      
      width: 15vw;
    }
    .title-modal{
      width: 53vw;
    }
    .subtitle-modal{
      width: 100%;
    }
                
}

/* small phone portrait*/
@media only screen and (min-width: 360px)  and (orientation: portrait),
    only screen and (min-device-width: 360px)  and (orientation: portrait){
/* @media only screen and (max-width: 360px) and (max-height: 640px) and (orientation: portrait),
    only screen and (max-device-width: 360px) and (max-height: 640px) and (orientation: portrait){*/
    .main-container{
      width: 30vw;  
    }
    label{      
      width: 30vw;
    }    
    /* .v-application .v-card__text */
     .portrait-title{
       font-size: 1.5em !important;
       padding-top: 1em ;
     }
     .portrait-title2{
       font-size: 1.2em !important;              
     }
    .subtitle-modal{
      width: 71vw;
    } 
        
}

/* iphone 5 portrait */
@media only screen and (min-width: 640px)  and (orientation: portrait),
    only screen and (min-device-width: 640px) and (orientation: portrait){
    /* @media only screen and (min-width: 640px)  and (min-height: 1136px) and (orientation: portrait),
    only screen and (min-device-width: 640px) and (min-device-height: 1136px) and (orientation: portrait){ */
    .main-container{
      width: 20vw;
      /* display: inline;       */
    }
    label{
      display: inline-block;
      width: 17vw;
    }
    .subtitle-modal{
      width: 83vw;
    } 
    .portrait-title2{
      padding-left: 5em !important;   
      padding-right: 5em !important;   
    }
      
}

/* mobile btter resolution portrait */
@media only screen and (min-width: 720px)  and (orientation: portrait),
    only screen and (min-device-width: 720px)  and (orientation: portrait){
  .main-container{  
    width: 16vw;
    height:auto;  
  }
  label{    
    width: 16vw;
    display: inline-block;
  }
   .subtitle-modal{
      width: 74vw;
    } 
}

/* tablet */
@media only screen and (min-width: 768)  and (orientation: portrait), 
    only screen and (min-device-width: 768px)  and (orientation: portrait){
    /* @media only screen and (max-width: 1125px) and (max-height: 2436px) and (orientation: portrait), 
        only screen and (max-device-width: 1125px) and (max-height: 2436px) and (orientation: portrait){ */
    .main-container{  
      width: 15vw;
      height:auto;  
    }
    label{    
      width: 15vw;
      display: inline-block;
    }
    .subtitle-modal{
      width: 70vw;
    } 
    /* .portrait-title2{
       font-size: 1.2em !important;              
     }
    .subtitle-modal{
      width: 71vw;
    }  */
}
/*iphone x portrait  */
@media only screen and (min-width: 1125px)  and (orientation: portrait), 
    only screen and (min-device-width: 1125px)  and (orientation: portrait){
    /* @media only screen and (max-width: 1125px) and (max-height: 2436px) and (orientation: portrait), 
        only screen and (max-device-width: 1125px) and (max-height: 2436px) and (orientation: portrait){ */
    .main-container{  
      width: 17vw;
      height:auto;  
    }
    label{    
      width: 17vw;
      display: inline-block;
    }
    .subtitle-modal{
      width: 48vw;
    } 
}
/* ipad portrait */
@media only screen and (min-width: 1668px)  and (orientation: portrait),
    only screen and (min-device-width: 1668px)  and (orientation: portrait){
  .main-container{  
      width: 12vw;
      height:auto;  
    }
    label{    
      width: 12vw;
      display: inline-block;
    }
    .subtitle-modal{
      width: 45vw;
    } 
}
</style>