<template>
    <v-container height="100vh" width="100vw" class="navbar pa-0" fluid>
        <v-navigation-drawer v-model="sidebar" right height="100vh" absolute temporary dark class="white--text">
            <v-list>          
            <v-list-item  v-for="item in menuItems" :key="item.item" :to="item.path">            
                <v-list-item-content class="pl-5 custom white--text text-sm-caption text-capitalize text-xs-caption"
                >{{ item.lbl }}</v-list-item-content>
            </v-list-item>
            </v-list>
        </v-navigation-drawer>   
        <v-toolbar color="transparent" class="black--text toolbarContainer" flat  >
            <v-toolbar-items>
                <nuxt-link to="/home" style="cursor: pointer">
                    <v-responsive  :width="width" class="pt-sm-3 pt-xs-2">
                        <v-img src="/images/logo-alt(sm).png" :contain="true" width="100%" height="100%"/>
                    </v-responsive>                        
                </nuxt-link>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-container class="d-flex flex-wrap" fluid pa-0>                
                    <v-btn
                    color="transparent" 
                    active-class="active-link"    
                    bottom
                    class="white--text text-xl-h4 text-lg-h6 text-md-h6 text-sm-subtitle-2 text-xs-subtitle-2 mt-6 ml-6 pt-13 pb-6 px-1"
                    v-for="item in menuItems"
                    :key="item.item"
                    :to="item.path">
                    <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
                    {{ item.lbl }}
                    </v-btn>                    
                </v-container>
            </v-toolbar-items>            
            <div class="d-flex flex-column justify-center social-media px-4 show-lg-and-down">
                <v-app-bar-nav-icon color="black" fab small class="hidden-md-and-up menuIcon" 
                @click="sidebar = !sidebar" />        
                <v-btn small fab class="pa-1" color="white">
                    <v-icon large color="black" >
                    mdi-facebook
                    </v-icon>
                </v-btn>                
                <v-btn small fab pa-1 color="white">
                    <v-icon  large color="black">
                        mdi-instagram
                    </v-icon>
                </v-btn>
                <v-btn small fab class="pa-2" color="white">
                    <v-icon dark large color="black">
                        mdi-youtube
                    </v-icon>
                </v-btn>
            </div>
            
        </v-toolbar>
    </v-container>
</template> 
<script>
export default {
    name : "NavBar",
    data() {
        return {
            sidebar: false,
            appitem: "Tequila",
            menuItems: [
                {path: "/home", lbl: "inicio", icon : ""},
                {path: "/history", lbl: "historia", icon: ""},
                {path:"/products", lbl: "nuestros tequilas", icon: ""},
                {path: "/gallery", lbl: "galeria", icon: ""},          
                {path:"/events", lbl: "eventos especiales", icon: ""}
            ],
        }
    },
    computed: {
      width(){      
        let w_img = 0;
        
        if (process.client) {           
            // console.log(window.innerWidth)        
            switch(screen.width){
                case 360:
                    w_img = 360 / 1.5;
                break;
                case 1366:
                    w_img = 1366 / 4;
                break;
                case 1920:
                    w_img = 1920 / 5;
                break;
            }
            return w_img;
        }
      }
    },
    
}
</script>     
<style scoped>
    .menuIcon{
        background-color: white;
    }
    .social-media{
        height:40vh;
        position: relative;
        top:2.3em ;
    }
    .navbar{
        width:100vw;
        height: 100vh;
        position: fixed;        
        top: 0;
        z-index: 2;
    }
    body{        
        border: 0px;
    }
    /* .v-sheet.v-toolbar:not(.v-sheet--outlined){
        box-shadow: unset;
        border: 0px;
    } */
    .v-btn--is-elevated{
        box-shadow: unset;
        text-shadow: 2px 2px 2px #000 !important;
    }
    .v-application .text-xl-h4, .v-application .text-lg-h6,
    .v-application .text-md-h6 .v-application .text-sm-subtitle-2,
    .v-application .text-xs-subtitle-2
    .v-application .text-sm-caption, .v-application .text-xs-caption{
        font-family: "Vani" !important;
    }
    .v-icon{ 
        text-shadow: 0px 0px 0px #000 !important;
    }
    .sidebar {
        will-change: transform;
    }
    .active-link{
        color: white !important;
        border-bottom:3px;
        border-bottom-color: white !important;

        background-color: unset;
    }
    .theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
        opacity: 1;
    }

    .v-btn::before {
        background-color: unset;            
        opacity: 0;
        border-bottom-style: solid; 
    }
    
    /* smartphones, iPhone, portrait 480x320 phones */ 
    @media (min-width:320px)  { 
        .social-media{
            /* height:40vh;
            position: relative; */
        top: 4em ;
        right: -1em;
    }
    }
    @media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
    @media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
    /* tablet, landscape iPad, lo-res laptops ands desktops */
    @media (min-width:961px)  {  
        .social-media{
            top:5.5em ;
        }
    }
    @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ 
        .social-media{
            top:5.5em ;
        }
        
    }
    @media (min-width:1281px) { /* hi-res laptops and desktops */ 
        .social-media{
            top:5.5em ;
        }
    }
    @media (min-width:1300px) { /* hi-res laptops and desktops */ 
        .social-media{
            top:2.3em ;
        }
    }
</style>

