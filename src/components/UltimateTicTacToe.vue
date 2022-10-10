<template>
  <div class="ultimateMainContainer mx-auto gap-3 row mt-5">
    <tic-tac-toe2 :inner-table="table1" :tableNum="1" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table2" :tableNum="2" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table3" :tableNum="3" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table4" :tableNum="4" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table5" :tableNum="5" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table6" :tableNum="6" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table7" :tableNum="7" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table8" :tableNum="8" :playerTurn="playerTurn" @addMark="addMark"/>
    <tic-tac-toe2 :inner-table="table9" :tableNum="9" :playerTurn="playerTurn" @addMark="addMark"/>
    <!--    <div id="TicTacToe" dir="ltr" class="mx-auto ultimateMainContainer row p-0 gap-5 mt-5">-->
    <!--      <div class="mainContainer row p-0" v-for="(i,index1) in 9" :key="index1">-->
    <!--        &lt;!&ndash;      first row    &ndash;&gt;-->
    <!--        <div class="cellContainer border " v-for="(j,index2) in 9" :key="index2" @click="addMark(i,j)">-->
    <!--          <div class="opponent opponentOne mt-2 text-center">-->
    <!--            X-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <AllScores :playerTurn="playerTurn" :playerOneWins="playerOneWins" :playerTwoWins="playerTwoWins"/>
  </div>
</template>

<script>
import AllScores from "@/views/Scores";
import TicTacToe2 from "@/components/TicTacToe2";

export default {
  name: "UltimateTicTacToe",
  components: {TicTacToe2, AllScores},
  data() {
    return {
      playerTurn: 0,
      playerOneWins: 0,
      playerTwoWins: 0,
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
        [],
        //  second row
        [],
        //  third row
        []
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
    addMark(x, y, tableNum) {

      if (tableNum === 1) {
        let newRow = this.table1[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table1, x, newRow)
        this.changeTurn()
      } else if (tableNum === 2) {
        let newRow = this.table2[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table2, x, newRow)
        this.changeTurn()
      } else if (tableNum === 3) {
        let newRow = this.table3[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table3, x, newRow)
        this.changeTurn()
      } else if (tableNum === 4) {
        let newRow = this.table4[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table4, x, newRow)
        this.changeTurn()
      } else if (tableNum === 5) {
        let newRow = this.table5[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table5, x, newRow)
        this.changeTurn()
      } else if (tableNum === 6) {
        let newRow = this.table6[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table6, x, newRow)
        this.changeTurn()
      } else if (tableNum === 7) {
        let newRow = this.table7[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table7, x, newRow)
        this.changeTurn()
      } else if (tableNum === 8) {
        let newRow = this.table8[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table8, x, newRow)
        this.changeTurn()
      } else if (tableNum === 9) {
        let newRow = this.table9[x].slice(0)
        newRow[y] = true
        // update it in the grid
        this.$set(this.table9, x, newRow)
        this.changeTurn()
      } else {
        return
      }
      // console.log("x = ", x)
      // console.log("y = ", y)
      // console.log("z = ", tableNum)
    },
    changeTurn() {
      if (this.playerTurn === 0) {
        this.playerTurn++
      } else {
        this.playerTurn--
      }
    }
  }
}
</script>

<style scoped>
.ultimateMainContainer {
  width: 500px;
}

.opponent {
  font-size: 25px;
}

.mainContainer {
  width: 150px;
  height: 150px;
  margin-left: 5px !important;
}

.cellContainer {
  width: 33%;
  padding: 0 !important;
  height: 65px;
}
</style>