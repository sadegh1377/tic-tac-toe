<template>
    <div class="d-flex justify-content-start changeLang">
        <button class="btn border-0 position-fixed" @click="changeLang" title="Change Language">
            <img width="40" height="40" src="../assets/language-icon.svg" alt="...">
            <span class="fw-semibold"> {{ selectedLang }}</span>
        </button>
    </div>
</template>

<script>
import i18n from "@/i18n";

export default {
    name: "ChangeLang",
    data() {
        return {
            selectedLang: i18n.locale,
        }
    },
    methods: {
        changeLang() {
            if (i18n.locale === 'en') {
                localStorage.removeItem('lang')
                localStorage.setItem("lang", 'fa')
                i18n.locale = 'fa'
                this.selectedLang = 'فا'
            } else {
                localStorage.removeItem('lang')
                localStorage.setItem("lang", 'en')
                i18n.locale = 'en'
                this.selectedLang = 'en'
            }
        },
    },
    created() {
        let lang = localStorage.getItem("lang");
        if (lang) {
            this.selectedLang = lang === 'fa' ? 'فا' : 'en'
            i18n.locale = lang
        }
    }
}

</script>

<style scoped>
</style>