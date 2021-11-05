<template>
    <div class="bg-history">        
        <NavBar />
    </div>
</template>
<script>
import NavBar from '@/components/NavBar';

export default {
    name: "Gallery",
    components: { NavBar },
}
</script>
<style>
    .bg-history{
        /* background: black; */
        background-image: url("../static/images/bg-history.jpg");
        /* background-size: 100vw 100vh; */
    }
</style>