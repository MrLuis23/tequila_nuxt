<template>
  <v-container fluid class="pa-0 " style="background: #1a1a1a;" >
    <v-container pa-0 class="d-flex flex-column white--text  justify-space-between" width="100vw"  fluid>      
      <NavBar />
      <MainCorousel id="top" name="top" />
      <History id="history" name="history"></History>
      <Products  id="products" name="products" />
      <Footer/>
    </v-container>
    
  </v-container>  
</template>

<script>
  import MainCorousel from '../components/MainCorousel';
  import NavBar from '@/components/NavBar';
  import Footer from '@/components/Footer';
  import History from '@/components/History';
  import Products from '@/components/Products.vue';

  export default {
    name: 'Home',
    components: {
      MainCorousel, NavBar,Footer,History,Products
    },
  }
</script>
