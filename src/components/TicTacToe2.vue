<template>
  <div>
    <div  v-for="(j,index2) in 9" :key="index2" @click="addMark(i,j)">
      <div class="opponent opponentOne mt-2 text-center">
        X
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicTacToe2",
  data() {
    return {}
  },
  methods: {
    addMark() {

    }
  }
}
</script>

<style scoped>

</style>