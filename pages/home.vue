<template>
  <v-container fluid class="pa-0 " style="background: black;" >
    <v-container pa-0 class="d-flex white--text  justify-space-between" width="100vw" fluid>      
      <NavBar />
      <MainCorousel />
    </v-container>
    
  </v-container>  
</template>

<script>
  import MainCorousel from '../components/MainCorousel';
  import NavBar from '@/components/NavBar';

  export default {
    name: 'Home',
    components: {
      MainCorousel, NavBar
    },
  }
</script>
