<template>
    <div class="container mx-auto row py-5">
        <div class="col-6">
            <div class="border py-2 defaultBackground"
                 :class="{'playersTurn':playerTurn === 0, 'changeDir': $i18n.locale === 'fa'}">
                {{ opponentOne }}: O
            </div>
            <div class="mt-4">{{ playerOneWins }}</div>
        </div>
        <div class="col-6">
            <div class="border py-2 defaultBackground"
                 :class="{'playersTurn':playerTurn === 1 , 'changeDir': $i18n.locale === 'fa'}">
                {{ opponentTwo }}: X
            </div>
            <div class="mt-4">{{ playerTwoWins }}</div>
        </div>
        <div class="mx-auto d-flex justify-content-center">
            <button class="btn btn-outline-danger btn-sm w-25 mx-3 mt-3 defaultBackground"
                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                {{ $t('allScores.restartBtn') }}
            </button>
            <router-link to="/" class="btn btn-outline-info btn-sm w-25 mx-3 mt-3 defaultBackground">
                {{ $t('allScores.backToHomeBtn') }}
            </router-link>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" :class="{'changeDir': $i18n.locale === 'fa'}">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ $t('allScores.modalTitle') }}</h5>
                        <button type="button"
                                :class="{'changeDirBtn': $i18n.locale === 'fa'}"
                                class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{ $t('allScores.modalDes') }}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            {{ $t('allScores.cancelBtn') }}
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="restartGame">
                            {{ $t('allScores.restartBtn') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AllScores",
    props: {
        playerTurn: {
            type: Number,
            require: true
        },
        playerOneWins: {
            type: Number,
            require: true
        },
        playerTwoWins: {
            type: Number,
            require: true
        },
        opponentOne: {
            type: String,
            require: true
        },
        opponentTwo: {
            type: String,
            require: true
        }
    },
    methods: {
        restartGame() {
            this.$emit('restartGame')
        }
    }
}
</script>

<style scoped>
.defaultBackground {
    background-color: white;
}

.playersTurn {
    background-color: #25cb20 !important;
    color: #f9f9f9;
}

.changeDir {
    direction: rtl !important;
}

.changeDirBtn {
    margin: 0 !important;
}
</style>