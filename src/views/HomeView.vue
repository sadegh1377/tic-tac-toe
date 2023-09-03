<template>
    <div class="homeView" :class="{'increaseHeight': showRules !== null}">
        <div class="border rounded pb-5 my-5 mx-auto background shadow">
            <div class="d-flex flex-row">
                <div class="card mx-5 mx-sm-auto my-5 shadow" style="width: 18rem;">
                    <img src="../assets/aiTictacToe.png" class="card-img-top cardImg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t('homePage.ticTacToeAiTitle') }}</h5>
                        <p class="card-text">{{ $t('homePage.ticTacToeAiDec') }}</p>
                        <router-link to="ai-ticTacToe" class="btn btn-primary px-5">{{
                            $t('homePage.playBtn')
                            }}
                        </router-link>
                        <button class="btn btn-outline-info ms-4"
                                @click="showRulesDiv('classic','rules')">
                            {{ $t('homePage.rulesBtn') }}
                        </button>
                    </div>
                </div>
                <div class="card mx-5 mx-sm-auto my-5 shadow" style="width: 18rem;">
                    <img src="../assets/ticTacToe.png" class="card-img-top cardImg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t('homePage.ticTacToeTitle') }}</h5>
                        <p class="card-text">{{ $t('homePage.ticTacToeDec') }}</p>
                        <router-link to="ticTacToe" class="btn btn-primary px-5">{{
                            $t('homePage.playBtn')
                            }}
                        </router-link>
                        <button class="btn btn-outline-info ms-4"
                                @click="showRulesDiv('classic','rules')">
                            {{ $t('homePage.rulesBtn') }}
                        </button>
                    </div>
                </div>
                <div class="card mx-5 mx-sm-auto my-5 shadow" style="width: 18rem;">
                    <img src="../assets/ultimate.png" class="card-img-top cardImg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ $t('homePage.ultimateTicTacToeTitle') }}</h5>
                        <p class="card-text">{{ $t('homePage.ultimateTicTacToeDec') }}</p>
                        <router-link to="ultimate-ticTacToe" class="btn btn-primary px-5">{{
                            $t('homePage.playBtn')
                            }}
                        </router-link>
                        <button class="btn btn-outline-info ms-4"
                                @click="showRulesDiv('ultimate','rules')">{{
                            $t('homePage.rulesBtn')
                            }}
                        </button>
                    </div>
                </div>
            </div>
            <div ref="rules" class="rulesContainer border rounded mx-auto mt-2 mb-5 bg-white"
                 v-show="showRules === 'classic'">
                <h4 class="mt-3">{{ $t('homePage.ticTacToeRulesTitle') }}</h4>
                <div class="description p-3"
                     :class="{'changeToRtl': $i18n.locale ==='fa'}"
                     v-html="$t('homePage.ticTacToeRules')">
                </div>
            </div>
            <div ref="rules" class="rulesContainer border rounded mx-auto mt-2 mb-5 bg-white"
                 v-show="showRules === 'ultimate'">
                <h4 class="mt-3">{{ $t('homePage.ultimateTicTacToeRulesTitle') }}</h4>
                <div class="description p-3"
                     :class="{'changeToRtl': $i18n.locale ==='fa'}"
                     v-html="$t('homePage.ultimateTicTacToeRules')">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HomeView",
    data() {
        return {
            showRules: null
        }
    },
    methods: {
        showRulesDiv(whichRules) {
            if (this.showRules === whichRules) {
                this.showRules = null
                this.$store.dispatch("changeShowRules", null)
                return
            }
            if (whichRules === 'classic') {
                this.showRules = 'classic'
                this.$store.dispatch("changeShowRules", 'classic')
            } else {
                this.showRules = 'ultimate'
                this.$store.dispatch("changeShowRules", 'ultimate')
            }
        }
    }
}

</script>

<style scoped>
.homeView {
    height: 100vh;
}

.increaseHeight {
    height: 1200px !important;
}

.rulesContainer {
    width: 1140px;
}

.cardImg {
    height: 200px !important;
    border-bottom: 1px #D2D2D2 solid;
    object-fit: fill;
    aspect-ratio: auto 100 / 100;
}

.background {
    position: absolute;
    right: 0;
    left: 0;
    width: 1227px;
    min-width: 1227px;
    background-color: rgba(245, 245, 245, 0.79);
}

.description {
    text-align: justify;
}

.changeToRtl {
    direction: rtl !important;
    line-height: 25px !important;
}

</style>