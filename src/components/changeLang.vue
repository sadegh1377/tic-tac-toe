<template>
    <div id="changeLang" class="d-flex justify-content-start">
        <button class="btn border-0 position-absolute" @click="changeLang" title="Change Language">
            <img width="40" height="40" src="../assets/language-icon.svg" alt="...">
            <span class="fw-semibold"> {{ selectedLang }}</span>
        </button>
    </div>
</template>

<script>
import i18n from "@/i18n";

export default {
    name: "changeLang",
    data() {
        return {
            selectedLang: i18n.locale,
        }
    },
    methods: {
        changeLang() {
            if (i18n.locale === 'en') {
                i18n.locale = 'fa'
                this.selectedLang = 'fa'
            } else {
                i18n.locale = 'en'
                this.selectedLang = 'en'
            }
        },
    }
}

</script>

<style scoped>
</style>