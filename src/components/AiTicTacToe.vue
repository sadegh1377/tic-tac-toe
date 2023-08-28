<template>
    <div id="aiTicTacToe" class="mx-auto my-5 rounded" dir="ltr">
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
                <div v-if="winner === 'One'|| winner === 'CPU' || winner === 'یک' || winner === 'کامپیوتر'"
                     :class="{'changeDir': $i18n.locale === 'fa' }">
                    <h1 class="mt-5">
                        <span v-if="winner !== 'CPU'">{{ $t('winnerOverlay.player') }}
                         </span>
                        <span class="winnerColor">{{ winner }}</span>
                        {{ $t('winnerOverlay.won') }}!!
                    </h1>
                </div>
                <h1 class="mt-5" v-if="winner === 'Draw' || winner === 'مساوی' ">{{ winner }}</h1>
                <button class="btn btn-outline-info mt-5" @click="resetAll">{{ $t('winnerOverlay.playAgainBtn') }}</button>
            </div>
            <div class="blockOverlay" v-if="isAiTurn" title="It's CPU Turn">
            </div>
        </div>
        <AllScores :playerTurn="playerTurn"
                   :playerOneWins="playerOneWins"
                   :playerTwoWins="cpuWins"
                   :opponentOne="$t('allScores.playerOne')"
                   :opponentTwo="$t('allScores.cpuPlayer')"
                   @restartGame="resetAll"/>
    </div>
</template>

<script>
import AllScores from "@/components/AllScores.vue";
import i18n from "@/i18n";

export default {
    name: "aiTicTacToe",
    components: {AllScores},
    mixins: [],
    data() {
        return {
            isAiTurn: false,
            timeoutID: null,
            playerTurn: 0,
            playerOneWins: 0,
            cpuWins: 0,
            winner: null,
            winningCombos: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]],
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
        async addMark(x, y) {
            if (this.winner || this.table[x][y] !== '') {
                return
            }
            this.table[x][y] = 'O'
            this.isAiTurn = true
            this.playerTurn++
            if (this.playerHas3InARow('O')) {
                this.playerOneWins++
                this.winner = i18n.t('winnerOverlay.playerOneWon')
                this.playerTurn--
                this.isAiTurn = false
                return
            } else {
                if (this.detectDraw()) {
                    this.winner = i18n.t('winnerOverlay.tie')
                    this.isAiTurn = false
                    return
                }
            }
            //     Ai move
            let aiChoice = await this.getBestMove()
            console.log(aiChoice)
            this.timeoutID = setTimeout(() => {
                this.table[aiChoice.bestI].splice(aiChoice.bestJ, 1, "X")
                this.playerTurn--
                this.isAiTurn = false
                if (this.playerHas3InARow('X')) {
                    this.cpuWins++
                    this.winner = i18n.t('winnerOverlay.cpu')
                    this.playerTurn++
                    clearTimeout(this.timeoutID)
                    return
                } else {
                    if (this.detectDraw()) {
                        clearTimeout(this.timeoutID)
                        this.winner = i18n.t('winnerOverlay.tie')
                        this.isAiTurn = false
                        return
                    }
                }
            }, 1000)
        },
        async getBestMove() {
            let cellRank = [[3, 2, 3], [2, 4, 2], [3, 2, 3]];
            //demote any cells already taken
            for (let i = 0; i < this.table.length; i++) {
                for (let j = 0; j < this.table.length; j++) {
                    if (this.table[i][j] !== '') {
                        cellRank[i][j] -= 99;
                    }
                }
            }
            for (let combo = 0; combo < this.winningCombos.length; combo++) {
                let a = this.winningCombos[combo][0];
                let b = this.winningCombos[combo][1];
                let c = this.winningCombos[combo][2];

                //if any two cells in a combo are
                //non-blank and the same value,
                //promote the remaining cell
                if (this.table.flat()[a] === this.table.flat()[b]) {
                    if (this.table.flat()[a] !== "") {
                        if (this.table.flat()[c] === "") {
                            let coordinatesOfCellRank = this.chooseCell(c)
                            cellRank[coordinatesOfCellRank.i][coordinatesOfCellRank.j] += 10;
                        }
                    }
                }

                if (this.table.flat()[a] === this.table.flat()[c]) {
                    if (this.table.flat()[a] !== "") {
                        if (this.table.flat()[b] === "") {
                            let coordinatesOfCellRank = this.chooseCell(b)
                            cellRank[coordinatesOfCellRank.i][coordinatesOfCellRank.j] += 10;
                        }
                    }
                }

                if (this.table.flat()[b] === this.table.flat()[c]) {
                    if (this.table.flat()[b] !== "") {
                        if (this.table.flat()[a] === "") {
                            let coordinatesOfCellRank = this.chooseCell(a)
                            cellRank[coordinatesOfCellRank.i][coordinatesOfCellRank.j] += 10;
                        }
                    }
                }
            }
            let bestI = -1;
            let bestJ = -1;
            let highest = -999;

            //step through cellRank to find the best available score
            for (let i = 0; i < this.table.length; i++) {
                for (let j = 0; j < this.table.length; j++) {
                    if (cellRank[i][j] > highest) {
                        highest = cellRank[i][j];
                        bestI = i
                        bestJ = j
                    }
                }
            }

            return {bestI: bestI, bestJ: bestJ};
        },
        chooseCell(cellNum) {
            switch (cellNum) {
                case 0:
                    return {i: 0, j: 0}
                case 1:
                    return {i: 0, j: 1}
                case 2:
                    return {i: 0, j: 2}
                case 3:
                    return {i: 1, j: 0}
                case 4:
                    return {i: 1, j: 1}
                case 5:
                    return {i: 1, j: 2}
                case 6:
                    return {i: 2, j: 0}
                case 7:
                    return {i: 2, j: 1}
                case 8:
                    return {i: 2, j: 2}
                default:
                    return null
            }
        },
        detectDraw() {
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
        }
        ,
        resetAll() {
            this.table = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            if (this.timeoutID) {
                clearTimeout(this.timeoutID)
            }
            this.playerTurn = 0
            this.winner = null

        }
    }
}
</script>

<style scoped>
@import "../assets/style.css";

#aiTicTacToe {
    position: absolute;
    right: 0;
    left: 0;
    width: 80vw;
    background-color: rgb(207, 207, 207, .4);
}

.mainContainer {
    position: relative;
    height: 300px;
    width: 300px;
    z-index: 1;
}

.blockOverlay {
    position: absolute;
    background-color: rgba(249, 249, 249, 0.6);
    top: 0;
    left: 0;
    height: 309px;
    width: 300px;
    z-index: 2;
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

.winnerColor {
    color: #FFD700;
}
</style>