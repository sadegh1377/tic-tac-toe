<template>
    <div id="TicTacToe" dir="ltr">
        <div class="mainContainer mx-auto mt-5 row">
            <!--   first row   -->
            <div class="cellContainer border" @click="addMark(0,0)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[0][0] === 'X'}">
                    {{ table[0][0] }}
                </div>
            </div>
            <div class="cellContainer border" @click="addMark(0,1)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[0][1] === 'X'}">
                    {{ table[0][1] }}
                </div>
            </div>
            <div class="cellContainer border" @click="addMark(0,2)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[0][2] === 'X'}">
                    {{ table[0][2] }}
                </div>
            </div>
            <!--   second row   -->
            <div class="cellContainer border" @click="addMark(1,0)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[1][0] === 'X'}">
                    {{ table[1][0] }}
                </div>
            </div>
            <div class="cellContainer border" @click="addMark(1,1)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[1][1] === 'X'}">
                    {{ table[1][1] }}
                </div>
            </div>
            <div class="cellContainer border" @click="addMark(1,2)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[1][2] === 'X'}">
                    {{ table[1][2] }}
                </div>
            </div>
            <!--   third row   -->
            <div class="cellContainer border" @click="addMark(2,0)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[2][0] === 'X'}">
                    {{ table[2][0] }}
                </div>
            </div>
            <div class="cellContainer border" @click="addMark(2,1)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[2][1] === 'X'}">
                    {{ table[2][1] }}
                </div>
            </div>
            <div class="cellContainer border" @click="addMark(2,2)">
                <div class="opponent opponentOne mt-4 text-center" :class="{'opponentTwo': table[2][2] === 'X'}">
                    {{ table[2][2] }}
                </div>
            </div>
            <!--  winner overlay  -->
            <div class="winnerOverlay" v-if="winner">
                <div v-if="winner === 'One'|| winner === 'Two'">
                    <h1 class="mt-5">Player
                        <span class="winnerColor">{{ winner }}</span>
                        won!!
                    </h1>
                </div>
                <h1 class="mt-5" v-if="winner === 'Tie'">{{ winner }}</h1>
                <button class="btn btn-outline-info mt-5" @click="resetAll">Play Again?</button>
            </div>
        </div>
        <AllScores :playerTurn="playerTurn" :playerOneWins="playerOneWins" :playerTwoWins="playerTwoWins"/>
    </div>
</template>

<script>
import AllScores from "@/components/AllScores.vue";

export default {
    name: "ticTacToe",
    components: {AllScores},
    mixins: [],
    data() {
        return {
            playerTurn: 0,
            playerOneWins: 0,
            playerTwoWins: 0,
            winner: null,
            table: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
        }
    },
    methods: {
        addMark(x, y) {
            if (this.winner || this.table[x][y] !== '') {
                return
            }
            if (this.playerTurn === 0) {
                this.table[x][y] = 'O'
                this.playerTurn++
                if (this.playerHas3InARow('O')) {
                    this.playerOneWins++
                    this.winner = "One"
                } else {
                    if (this.detectTie()) {
                        this.winner = "Tie"
                    }
                }
            } else {
                this.table[x][y] = 'X'
                this.playerTurn--
                if (this.playerHas3InARow('X')) {
                    this.playerTwoWins++
                    this.winner = "Two"
                } else {
                    if (this.detectTie()) {
                        this.winner = "Tie"
                    }
                }
            }
        },
        detectTie() {
            for (let i = 0; i < this.table.length; i++) {
                for (let j = 0; j < this.table.length; j++) {
                    if (this.table[i][j] === '') {
                        return false
                    }
                }
            }
            return true
        },
        playerHas3InARow(playerMarker) {
            // Horizontal rows
            for (let i = 0; i < 3; i++) {
                if (this.table[0][i] === playerMarker && this.table[1][i] === playerMarker && this.table[2][i] === playerMarker) {
                    return true;
                }
            }

            // Vertical rows
            for (let i = 0; i < 3; i++) {
                if (this.table[i][0] === playerMarker && this.table[i][1] === playerMarker && this.table[i][2] === playerMarker) {
                    return true;
                }
            }

            // Diagonals
            if (this.table[0][0] === playerMarker && this.table[1][1] === playerMarker && this.table[2][2] === playerMarker) {
                return true;
            }
            if (this.table[0][2] === playerMarker && this.table[1][1] === playerMarker && this.table[2][0] === playerMarker) {
                return true;
            }

            return false;
        },
        resetAll() {
            this.table = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            if (this.winner === 'One') {
                this.playerTurn = 1
            } else {
                this.playerTurn = 0
            }
            this.winner = null

        }
    }
}
</script>

<style scoped>
.mainContainer {
    position: relative;
    height: 300px;
    width: 300px;
    z-index: 1;
}

.winnerOverlay {
    position: absolute;
    background-color: rgba(249, 249, 249, 0.88);
    top: 0;
    left: 0;
    height: 309px;
    width: 300px;
    z-index: 2;
}

.cellContainer {
    background-color: #f9f9f9;
    width: 33%;
    height: 33.99%;
    cursor: pointer;
}

.cellContainer:active {
    background-color: #b1b1b1;
    background-size: 100%;
    transition: background 0s;
}

.opponent {
    font-size: 40px;

}

.opponentOne {
    color: #0d86ff;
}

.opponentTwo {
    color: #ff1717 !important;
}

.playersTurn {
    background-color: #25cb20;
    color: #f9f9f9;
}

.winnerColor {
    color: #FFD700;
}
</style>