<template>
  <v-app>    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({    
  }),
};
</script>
<style >


@font-face {
  font-family: "Vani";
  font-style: normal;
  font-weight: normal;
  src: url("./static/fonts/Vani.ttf") format("truetype"); 
} 
@font-face {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  src: url("./static/fonts/lato.ttf") format("truetype"); 
} 

@font-face {
  font-family: "Edwardian";
  font-style: normal;
  font-weight: normal;
  src: url("./static/fonts/Edwardian.ttf") format("truetype"); 
} 

*, ::before, ::after{
  box-sizing: border-box;
}

html{
  border: 0px;
  overflow-y: auto !important;
}
  
</style>