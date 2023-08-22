<template>
    <div class="container mx-auto row py-5">
        <div class="col-6">
            <div class="border py-2 defaultBackground" :class="{'playersTurn':playerTurn === 0}">
                {{ opponentOne }}: O
            </div>
            <div class="mt-4">{{ playerOneWins }}</div>
        </div>
        <div class="col-6">
            <div class="border py-2 defaultBackground" :class="{'playersTurn':playerTurn === 1}">
                {{ opponentTwo }}: X
            </div>
            <div class="mt-4">{{ playerTwoWins }}</div>
        </div>
        <div class="mx-auto d-flex justify-content-center">
            <button class="btn btn-outline-danger btn-sm w-25 mx-3 mt-3 defaultBackground"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"> Restart
            </button>
            <router-link to="/" class="btn btn-outline-info btn-sm w-25 mx-3 mt-3 defaultBackground">Back to Home
            </router-link>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Restart the Game</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to restart the game?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cansel</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="restartGame">Restart</button>
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
</style>