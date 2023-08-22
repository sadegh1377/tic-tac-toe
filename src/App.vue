<template>
    <div id="app">
        <change-lang class=""/>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
        <SemiFooter/>
    </div>
</template>

<script setup>
import SemiFooter from "@/components/SemiFooter.vue";
import ChangeLang from "@/components/changeLang.vue";
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100vh;
    background-attachment: fixed;
    background-image: url('assets/background.png');
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