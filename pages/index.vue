<template>
  <v-container fluid class="pa-0">
    <InitDialog></InitDialog>
  </v-container>  
</template>

<script>
  import InitDialog from '../components/InitDialog'

  export default {
    name: 'Home',

    components: {
      InitDialog,
    },
  }
</script>
