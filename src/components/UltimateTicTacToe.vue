<template>
  <div>
    <div id="TicTacToe" dir="ltr" class="mx-auto ultimateMainContainer row p-0 gap-5 mt-5">
      <div class="mainContainer row p-0" v-for="(i,index1) in 9" :key="index1">
        <!--      first row    -->
        <div class="cellContainer border " v-for="(j,index2) in 9" :key="index2" @click="addMark(i,j)">
          <div class="opponent opponentOne mt-2 text-center">
            X
          </div>
        </div>
      </div>
    </div>
    <AllScores/>
  </div>
</template>

<script>
import AllScores from "@/views/Scores";

export default {
  name: "UltimateTicTacToe",
  components: {AllScores},
  data() {
    return {
      outerTable: [
        //  first row
        ["", "", ""],
        //  second row
        ["", "", ""],
        //  third row
        ["", "", ""]
      ],
      innerTable: [
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
    addMark(x, y) {
      console.log(x, y)
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
  margin-top: -25px;
}

.cellContainer {
  width: 50px;
  padding: 0 !important;
  height: 50px;
}
</style>