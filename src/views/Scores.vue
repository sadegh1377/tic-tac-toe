<template>
  <div class="container mx-auto row pt-5">
    <div class="col-6">
      <div class="border py-2" :class="{'playersTurn':playerTurn === 0}">
        Opponent One : O
      </div>
      <div class="mt-4">{{ playerOneWins }}</div>
    </div>
    <div class="col-6">
      <div class="border py-2" :class="{'playersTurn':playerTurn === 1}">
        Opponent Two : X
      </div>
      <div class="mt-4">{{ playerTwoWins }}</div>
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
    }
  }
}
</script>

<style scoped>
.playersTurn {
  background-color: #25cb20;
  color: #f9f9f9;
}
</style>