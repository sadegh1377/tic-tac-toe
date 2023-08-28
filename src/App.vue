<template>
    <div id="app" :class="{'increaseHeight':this.$store.state.showRules !== null && $route.name === 'Home' }">
        <ChangeLang class=""/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <SemiFooter/>
    </div>
</template>

<script setup>
import SemiFooter from "@/components/SemiFooter.vue";
import ChangeLang from "@/components/ChangeLang.vue";
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Rubik&display=swap');

#app {
    font-family: 'Rubik', 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
    background-attachment: fixed;
    background-image: url('assets/background.png');
}

.increaseHeight {
    height: 1200px !important;
}

.fade-enter-active {
    transition: opacity 0.2s ease-in;
}

.fade-leave-active {
    transition: opacity 0.2s ease-out;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>