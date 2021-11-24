<template>
  
    <v-container fluid width="100vw" style="background-color:#1a1a1a;"
        class="d-flex flex-column align-center">        
        <v-bottom-navigation
            :value="value"            
            horizontal            
        >
            <v-btn small fab class="pa-1" color="#1a1a1a">
                <v-icon large color="white" >
                    mdi-facebook
                </v-icon>
            </v-btn>                
            <v-btn small fab pa-1 color="#1a1a1a">
                <v-icon  large color="white">
                    mdi-instagram
                </v-icon>
            </v-btn>
            <v-btn small fab class="pa-2" style="background-color: #1a1a1a">
                <v-icon dark large color="white">
                    mdi-youtube
                </v-icon>
            </v-btn>    
        </v-bottom-navigation>
        <div style="background-color:#1a1a1a;width:100vw;" class="d-flex justify-center text-center flex-wrap" >
            <p class="white--text">&copy; {{date}} adelantequila.com | Todos los derechos reservados.</p>
        </div>
    </v-container>    
</template>
<script>
export default {
    name: "Footer",
    data: () => ({ value: 1 }),
    computed: {
        date: function (){
            var now = new Date();            
            return now.getFullYear();
        }
        
    },
}
</script>
<style scoped>
    .v-item-group.v-bottom-navigation{
        box-shadow: none;
    }
    .theme--dark.v-bottom-navigation{
        background-color: #1a1a1a;
    }
</style>

