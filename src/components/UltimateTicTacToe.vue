<template>
    <div class="ultimateMainContainer mx-auto gap-3 row mt-5">
        <!--  winner overlay  -->
        <div class="outerWinnerOverlay" v-if="winner">
            <div class="winnerText" v-if="winner === 'One'|| winner === 'Two'">
                <h1 class="mt-5">Player
                    <span class="winnerColor">{{ winner }}</span>
                    won!!
                </h1>
            </div>
            <h1 class="mt-5" v-if="winner === 'Tie'">{{ winner }}</h1>
            <button class="btn btn-outline-info playAgainBtn" @click="playAgain">Play Again?</button>
        </div>
        <tic-tac-toe2 :inner-table="table1"
                      :whichTableToPlay="tableNum"
                      :tableNum="1"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[0][0] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[0][0] === 'X'}">
                    {{ outerTable[0][0] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table2"
                      :whichTableToPlay="tableNum"
                      :tableNum="2"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[0][1] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[0][1] === 'X'}">
                    {{ outerTable[0][1] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table3"
                      :whichTableToPlay="tableNum"
                      :tableNum="3"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[0][2] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[0][2] === 'X'}">
                    {{ outerTable[0][2] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table4"
                      :whichTableToPlay="tableNum"
                      :tableNum="4"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[1][0] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[1][0] === 'X'}">
                    {{ outerTable[1][0] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table5"
                      :whichTableToPlay="tableNum"
                      :tableNum="5"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[1][1] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[1][1] === 'X'}">
                    {{ outerTable[1][1] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table6"
                      :whichTableToPlay="tableNum"
                      :tableNum="6"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[1][2] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[1][2] === 'X'}">
                    {{ outerTable[1][2] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table7"
                      :whichTableToPlay="tableNum"
                      :tableNum="7"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[2][0] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[2][0] === 'X'}">
                    {{ outerTable[2][0] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table8"
                      :whichTableToPlay="tableNum"
                      :tableNum="8"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[2][1] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[2][1] === 'X'}">
                    {{ outerTable[2][1] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <tic-tac-toe2 :inner-table="table9"
                      :whichTableToPlay="tableNum"
                      :tableNum="9"
                      @addMark="selectTable">
            <div class="winnerOverlay" v-if="outerTable[2][2] !== ''">
                <h1 class="opponent opponentOne text-center" :class="{'opponentTwo': outerTable[2][2] === 'X'}">
                    {{ outerTable[2][2] }}
                </h1>
            </div>
        </tic-tac-toe2>
        <AllScores :playerTurn="playerTurn"
                   :playerOneWins="playerOneWins"
                   :playerTwoWins="playerTwoWins"
                   opponentOne="Opponent One"
                   opponentTwo="Opponent Twe"/>
    </div>
</template>

<script>
import AllScores from "@/components/AllScores.vue";
import TicTacToe2 from "@/components/TicTacToe2";

export default {
    name: "UltimateTicTacToe",
    components: {TicTacToe2, AllScores},
    data() {
        return {
            tableNum: null,
            winner: null,
            innerTablesWon: [],
            playerTurn: 0,
            playerOneWins: 0,
            playerTwoWins: 0,
            winnerOfInnerTableMark: [],
            outerTable: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table1: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table2: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table3: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table4: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table5: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table6: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table7: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table8: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ],
            table9: [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
        }
    },
    methods: {
        selectTable(x, y, tableNum) {
            // console.log("x = ", x)
            // console.log("y = ", y)

            if (tableNum === 1) {
                const newRow = this.addMark(x, y, this.table1)
                this.$set(this.table1, x, newRow)
                // console.log(this.table1)
                // console.log(this.playerHas3InARow(this.table1, this.table1[x][y]))
                if (this.playerHas3InARow(this.table1, this.table1[x][y])) {
                    this.winInInnerTable(tableNum, this.table1[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table1, tableNum)
            } else if (tableNum === 2) {
                const newRow = this.addMark(x, y, this.table2)
                this.$set(this.table2, x, newRow)

                if (this.playerHas3InARow(this.table2, this.table2[x][y])) {
                    this.winInInnerTable(tableNum, this.table2[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table2, tableNum)
            } else if (tableNum === 3) {
                const newRow = this.addMark(x, y, this.table3)
                this.$set(this.table3, x, newRow)
                if (this.playerHas3InARow(this.table3, this.table3[x][y])) {
                    this.winInInnerTable(tableNum, this.table3[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table3, tableNum)
            } else if (tableNum === 4) {
                const newRow = this.addMark(x, y, this.table4)
                this.$set(this.table4, x, newRow)
                if (this.playerHas3InARow(this.table4, this.table4[x][y])) {
                    this.winInInnerTable(tableNum, this.table4[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table4, tableNum)
            } else if (tableNum === 5) {
                const newRow = this.addMark(x, y, this.table5)
                this.$set(this.table5, x, newRow)
                if (this.playerHas3InARow(this.table5, this.table5[x][y])) {
                    this.winInInnerTable(tableNum, this.table5[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table5, tableNum)
            } else if (tableNum === 6) {
                const newRow = this.addMark(x, y, this.table6)
                this.$set(this.table6, x, newRow)
                if (this.playerHas3InARow(this.table6, this.table6[x][y])) {
                    this.winInInnerTable(tableNum, this.table6[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table6, tableNum)
            } else if (tableNum === 7) {
                const newRow = this.addMark(x, y, this.table7)
                this.$set(this.table7, x, newRow)
                if (this.playerHas3InARow(this.table7, this.table7[x][y])) {
                    this.winInInnerTable(tableNum, this.table7[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table7, tableNum)
            } else if (tableNum === 8) {
                const newRow = this.addMark(x, y, this.table8)
                this.$set(this.table8, x, newRow)
                if (this.playerHas3InARow(this.table8, this.table8[x][y])) {
                    this.winInInnerTable(tableNum, this.table8[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table8, tableNum)
            } else if (tableNum === 9) {
                const newRow = this.addMark(x, y, this.table9)
                this.$set(this.table9, x, newRow)
                if (this.playerHas3InARow(this.table9, this.table9[x][y])) {
                    this.winInInnerTable(tableNum, this.table9[x][y])
                    this.checkOuterWinner(x, y)
                }
                this.whichTableToPlay(x, y, this.table9, tableNum)
            } else {
                return
            }
        },
        checkOuterWinner() {
            console.log("checkOuterWinner")
            console.log(this.outerTable)
            if (this.playerTurn === 1) {
                console.log("This Is Player One")
                if (this.playerHas3InARow(this.outerTable, "O")) {
                    console.log("player One Won")
                    this.playerOneWins++
                    this.winner = "One"
                } else {
                    if (this.detectTie()) {
                        this.winner = "Tie"
                    }
                }
            } else {
                console.log("This Is Player Twe")
                if (this.playerHas3InARow(this.outerTable, "X")) {
                    console.log("player Twe Won")
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
            for (let i = 0; i < this.outerTable.length; i++) {
                for (let j = 0; j < this.outerTable.length; j++) {
                    if (this.outerTable[i][j] === '') {
                        return false
                    }
                }
            }
            return true
        },
        addMark(x, y, table) {
            if (table[x][y] !== '') {
                // console.log(table[x].slice(0))
                return table[x].slice(0)
            }
            let newRow = table[x].slice(0)
            if (this.playerTurn === 0) {
                newRow[y] = "O"
                this.changeTurn()
            } else {
                newRow[y] = "X"
                this.changeTurn()
            }
            return newRow

        },
        winInInnerTable(tableNum, playerMark) {
            this.innerTablesWon.push(tableNum)
            this.whichTableIsWin(tableNum, playerMark)
        },
        whichTableIsWin(tableNum, playerMark) {
            if (tableNum === 1) {
                this.outerTable[0][0] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 2) {
                this.outerTable[0][1] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 3) {
                this.outerTable[0][2] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 4) {
                this.outerTable[1][0] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 5) {
                this.outerTable[1][1] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 6) {
                this.outerTable[1][2] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 7) {
                this.outerTable[2][0] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 8) {
                this.outerTable[2][1] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            } else if (tableNum === 9) {
                this.outerTable[2][2] = playerMark
                this.winnerOfInnerTableMark.push(playerMark)
            }
            // console.log(this.outerTable)
            // console.log(this.winnerOfInnerTableMark)
        },
        whichTableToPlay(x, y) {
            // console.log(innerTable[x][y])
            // console.log(tableNum)
            if (this.outerTable[x][y] !== '') {
                this.tableNum = null
                // console.log(this.outerTable[x][y])
                return
            }
            if (x === 0) {
                if (y === 0) {
                    this.tableNum = 1
                } else if (y === 1) {
                    this.tableNum = 2
                } else {
                    this.tableNum = 3
                }
            } else if (x === 1) {
                if (y === 0) {
                    this.tableNum = 4
                } else if (y === 1) {
                    this.tableNum = 5
                } else {
                    this.tableNum = 6
                }
            } else {
                if (y === 0) {
                    this.tableNum = 7
                } else if (y === 1) {
                    this.tableNum = 8
                } else {
                    this.tableNum = 9
                }
            }
        },
        playerHas3InARow(table, playerMarker) {
            console.log("Table From playerHas3InARow")
            console.log(table)
            console.log("playerMarker = " + playerMarker)
            // Vertical rows
            for (let i = 0; i < 3; i++) {
                if (table[0][i] === playerMarker && table[1][i] === playerMarker && table[2][i] === playerMarker) {
                    console.log('Vertical')
                    return true;
                }
            }

            // Horizontal rows
            for (let i = 0; i < 3; i++) {
                if (table[i][0] === playerMarker && table[i][1] === playerMarker && table[i][2] === playerMarker) {
                    console.log('Horizontal')
                    return true;
                }
            }

            // Diagonals
            if (table[0][0] === playerMarker && table[1][1] === playerMarker && table[2][2] === playerMarker) {
                console.log("Diagonals 1")
                return true;
            }
            if (table[0][2] === playerMarker && table[1][1] === playerMarker && table[2][0] === playerMarker) {
                console.log("Diagonals 2")
                return true;
            }

            return false;
        },
        changeTurn() {
            if (this.playerTurn === 0) {
                this.playerTurn++
            } else {
                this.playerTurn--
            }
        },
        playAgain() {
            this.outerTable = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table1 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table2 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table3 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table4 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table5 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table6 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table7 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table8 = [
                //  first row
                ["", "", ""],
                //  second row
                ["", "", ""],
                //  third row
                ["", "", ""]
            ]
            this.table9 = [
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
            this.tableNum = null
        }
    }
}
</script>

<style scoped>

.ultimateMainContainer {
    width: 500px;
}

.opponent {
    font-size: 40px;
    margin-top: 40%;
}

.winnerText {
    position: absolute;
    top: 100px;
    left: 50px;
    right: 50px;
}

.winnerColor {
    color: #FFD700;
    font-size: 50px !important;
}

.playAgainBtn {
    position: absolute;
    bottom: 40px;
    left: 50px;
    right: 50px;
    margin-left: auto;
    margin-right: auto;
}

.mainContainer {
    position: relative;
    width: 150px;
    height: 150px;
    margin-left: 5px !important;
}

.cellContainer {
    width: 33%;
    padding: 0 !important;
    height: 65px;
}

.outerWinnerOverlay {
    position: absolute;
    width: 500px;
    height: 500px;
    background-color: rgba(249, 249, 249, 0.90);
    z-index: 100;
}

.winnerOverlay {
    position: absolute;
    background-color: rgba(249, 249, 249, 0.8);
    top: 0;
    left: 0;
    width: 150px;
    height: 153px;
    z-index: 2;
}

</style>