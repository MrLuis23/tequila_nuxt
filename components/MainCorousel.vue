<template>
  <!-- <transition name="fade" appear mode="in-out"> -->
  <v-carousel :show-arrows="false" cycle
   hide-delimiters
   hide-delimiter-background
   interval="10000"   
   height="100vh"       
      >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"      
      :src="item.src" 
      reverse-transition="fade-transition"
      transition="fade-transition" 
      eager
      >

      <div :class="item.containerClass">
          <!-- <div  v-for="(lbl,i) in items.labels"          
          :key="i">  -->
          <div v-if="item.labels.lbl1" :class="item.lblClass1"> 
            {{ item.labels.lbl1 }}
          </div>
          <div v-if="item.labels.lbl2" :class="item.lblClass2"> 
            {{ item.labels.lbl2 }} 
          </div>

              
          <!-- </div> -->
      </div>
         
    </v-carousel-item>
  </v-carousel>
  <!-- </transition> -->
</template>
<script>
  export default {
    data () {
      return {      
        
        
        items: [
          { 
            // src: require('../static/images/bg-dialog.jpg'),                       
            src: require('../static/images/sl1.jpeg'),
            labels: { lbl1: "Taste good, the way", lbl2: "It should!" },
            containerClass: 'lbl-container d-flex white--text flex-column slide-1',
            lblClass1: "lbl-1 slide-1 text-lg-h2 text-md-h2  d-flex ",
            lblClass2: "pr-lg-16 lbl-2 slide-1 text-lg-h1 text-capitalize d-flex"
            
          },
          {
            // src: require('../static/images/bg-dialog.jpg'),            
            src: require('../static/images/sl2.jpeg'),
            labels: {lbl1: "Creado", lbl2: "para ti"},
            containerClass: 'lbl-container white--text d-flex slide-2',
            lblClass1: "slide-2 lbl-1  text-lg-h2 text-md-h2  d-flex text-capitalize",
            lblClass2: "pr-lg-16 slide-2 lbl-2 text-lg-h1 text-capitalize d-flex"            
          },
          {
            src: require('../static/images/sl1.jpeg'),
            // src: require('../static/images/bg-dialog.jpg'),            
            labels: { lbl1: "Tradición", lbl2: "" },
            containerClass: 'lbl-container white--text d-flex flex-column align-items-start slide-3',
            // containerClass: 'lbl-container white--text d-flex flex-column text-h2 slide-2',
            lblClass1: "slide-3 lbl-1  text-lg-h2 text-md-h2  d-flex text-capitalize",
            lblClass2: "pr-lg-16 slide-3 lbl-2 text-lg-h1 text-capitalize d-flex"
          },
          
        ],
      }
    },
    
  }
</script>
<style  scoped>      
  @media screen and (min-width: 1904.1px){    
      .lbl-container{    
      position:relative;
      z-index: 2;   
      width: 100vw; 
      top: 35%;      
    }  
    
    .slide-1 .lbl-1{
      width: 60vw !important;     
      position: relative;      
      top: .2em;
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 4em !important;
      justify-content: start;
      padding-left: 5vw;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-1 .lbl-2{
      width: 40vw !important;           
      left:0 !important;
      align-items: center !important;
      justify-content: end;
      position: relative;
      text-shadow: 2px 2px 2px #000;
      font-family: "Edwardian" !important;
      font-size: 8em;
      bottom: 0em;
      top: 0em
    }
    .slide-2 .lbl-1{
      width: 25vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 4em !important;
      justify-content: end;
      text-transform: unset !important;
      text-shadow: 2px 2px 2px #000;
      top:37vh;
      padding-left: 0vw;
    }
    .slide-2 .lbl-2{
      width: 75vw !important;     
      /* top: 40%; */
      left:0 !important;
      align-items: center !important;
      position: relative;
      font-family: "Edwardian" !important;          
      font-size: 8em !important;
      text-transform: lowercase !important;
      bottom: 0vh;
      top:35.5vh;
      padding-left: 0em;
      justify-content: start;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-3 .lbl-1{
      width: 90vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Edwardian" !important;
      font-size: 8em !important;
      justify-content: end;
      top: 33vh;
      text-shadow: 2px 2px 2px #000;
    }                
  } 
  @media screen and (max-width: 1904px){    
    .lbl-container{    
      position:relative;
      z-index: 2;   
      width: 100vw; 
      top: 35%;      
    }  
    
    .slide-1 .lbl-1{
      width: 60vw !important;     
      position: relative;      
      top: 2em;
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 2.7em !important;
      justify-content: start;
      padding-left: 5vw;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-1 .lbl-2{
      width: 44vw !important;           
      left:0 !important;
      align-items: center !important;
      justify-content: end;
      position: relative;      
      font-family: "Edwardian" !important;          
      font-size: 5.5em;
      bottom: 0em;
      top: .6em;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-2 .lbl-1{
      width: 25vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 4em !important;
      justify-content: end;
      text-shadow: 2px 2px 2px #000;
      top:37vh;
      padding-left: 0vw;
    }
    .slide-2 .lbl-2{
      width: 75vw !important;     
      text-shadow: 2px 2px 2px #000;
      left:0 !important;
      align-items: center !important;
      position: relative;
      font-family: "Edwardian" !important;          
      font-size: 6em !important;
      text-transform: lowercase !important;
      bottom: 0vh;
      top:35.5vh;
      padding-left: 0em;
      justify-content: start;
    }
    .slide-3 .lbl-1{
      width: 90vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Edwardian" !important;
      font-size: 6em !important;
      justify-content: end;
      top: 33vh;
      text-shadow: 2px 2px 2px #000;
    }        
    
  } 
  @media screen and (max-width: 960px){    
    .lbl-container{    
      position:relative;
      z-index: 2;   
      width: 100vw; 
      top: 35%;      
    }  
    
    .slide-1 .lbl-1{
      width: 60vw !important;     
      position: relative;      
      top: 2em;
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 2.7em !important;
      justify-content: start;
      padding-left: 5vw;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-1 .lbl-2{
      width: 57vw !important;           
      left:0 !important;
      align-items: center !important;
      justify-content: end;
      position: relative;      
      font-family: "Edwardian" !important;          
      font-size: 5.5em;
      bottom: 0em;
      top: .5em;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-2 .lbl-1{
      width: 25vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 3em !important;
      justify-content: end;
      text-shadow: 2px 2px 2px #000;
      top:37vh;
      padding-left: 0vw;
    }
    .slide-2 .lbl-2{
      width: 75vw !important;     
      text-shadow: 2px 2px 2px #000;
      left:0 !important;
      align-items: center !important;
      position: relative;
      font-family: "Edwardian" !important;          
      font-size: 6.8em;
      text-transform: lowercase !important;
      bottom: 0vh;
      top:35.5vh;
      padding-left: 0em;
      justify-content: start;
    }
    .slide-3 .lbl-1{
      width: 90vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Edwardian" !important;
      font-size: 6em !important;
      justify-content: end;
      top: 33vh;
      text-shadow: 2px 2px 2px #000;
    }      
  } 
  @media screen and (max-width: 810px){     
    .lbl-container{    
      position:relative;
      z-index: 2;   
      width: 100vw; 
      top: 35%;                  
    }  
    
    .slide-1 .lbl-1{
      width: 60vw !important;     
      position: relative;      
      top: 2em;
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 2.3em !important;
      justify-content: start;
      padding-left: 5vw;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-1 .lbl-2{
      width: 60vw !important;           
      left:0 !important;
      align-items: center !important;
      justify-content: end;
      position: relative;
      text-shadow: 2px 2px 2px #000;
      font-family: "Edwardian" !important;          
      font-size: 4.7em;
      bottom: 0em;
      top: .5em
    }
    .slide-2 .lbl-1{width: 100vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 3em !important;
      justify-content: end;
      width: 40vw !important;   
      top:37vh;
      padding-left: 10vw;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-2 .lbl-2{
      width: 40vw !important;           
      left:0 !important;
      align-items: center !important;
      position: relative;
      font-family: "Edwardian" !important;          
      font-size: 6.8em;
      text-transform: lowercase !important;
      bottom: 0vh;
      top:36vh;
      padding-left: 0em;
      justify-content: start;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-3 .lbl-1{
      width: 90vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Edwardian" !important;
      font-size: 6em !important;
      justify-content: end;
      top: 33vh;
      text-shadow: 2px 2px 2px #000;
    }           
  }          
  @media screen and (orientation: portrait){    
    .lbl-container{    
      position:relative;
      z-index: 2;   
      width: 100vw; 
      top: 35%;      
      
    }  
    .slide-1 .lbl-1{width: 100vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 2.3em !important;
      justify-content: center;
      text-shadow: 2px 2px 2px #000;
      padding-left: 0vw;
      top : 2em;
    }
    .slide-1 .lbl-2{
      top: .5em;
      width: 100vw !important;           
      left:0 !important;
      align-items: center !important;
      justify-content: center;
      position: relative;
      font-family: "Edwardian" !important;          
      font-size: 4.5em;
      bottom: 6vh;
      text-shadow: 2px 2px 2px #000;
      padding-left: 0vw;
    }
    .slide-2 .lbl-1{
      width: 50vw !important;     
      position: relative;      
      left:0 !important;
      top : 0;
      align-items: center !important;
      font-family: "Vani" !important;
      font-size: 3em !important;
      justify-content: end !important;
      padding-right: 0em !important;
      padding-left: 0em !important;
      text-shadow: 2px 2px 2px #000;
    }
    .slide-2 .lbl-2{
      width: 50vw !important;     
      text-shadow: 2px 2px 2px #000;
      left:0 !important;
      align-items: center !important;
      position: relative;
      font-family: "Edwardian" !important;          
      font-size: 5em;
      text-transform: lowercase !important;
      bottom: 0em;
      top: 0vh;
      justify-content: start;
      padding-left: 0vw;
      margin-right: .2em;      
    }
    .slide-3 .lbl-1{width: 100vw !important;     
      position: relative;      
      left:0 !important;
      align-items: center !important;
      font-family: "Edwardian" !important;
      font-size: 4em !important;
      justify-content: center;
      top:40vh;
      text-shadow: 2px 2px 2px #000;
    }           
  }
</style>