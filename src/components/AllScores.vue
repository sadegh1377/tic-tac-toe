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
        <router-link to="/" class="btn btn-outline-info btn-sm w-25 mt-3 mx-auto defaultBackground">Back to Home
        </router-link>
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