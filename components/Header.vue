<template>
  <v-container :class="[color]"
    class="d-flex align-center text-h5 text-sm-h6 section justify-center"
    width="100vw" fluid >

    <v-row class="text-center d-flex justify-center ma-0">
      <p :class="{'styled':styled}" class="d-flex align-center ma-0 pa-1">{{text}}</p>
    </v-row>    
  </v-container>
</template>
<script>
export default {
  name: "Header",
  props: ['text','color', 'styled'],
  data: () =>({ }),

}
</script>
<style scoped>
.styled{
  background-image: linear-gradient(to right, rgb(232,165,0),rgb(59,41,5)) !important; 
  background-size: contain;
  /* background-image: linear-gradient(60deg, #8500ff, #ff8100) !important; */
  color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
}
.green{
  background-color:rgba(13, 71, 42, 1) !important;
}
.black{
  background-color: #1a1a1a;
}
.section{
  height: 6em;
}

.v-application .section{        
    font-family:   "Vani" !important;
    font-size: 2em  !important;
    text-transform: uppercase !important;
}
@media (min-width:320px)  { 
/* smartphones, iPhone, portrait 480x320 phones */ 
  .section{
    height: 3em;
  }
}
@media (min-width:961px)  { 
  .section{
    height: 4em;
  }
}
    

  
</style>

