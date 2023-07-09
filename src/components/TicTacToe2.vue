<template>
    <div class="mainContainer row p-0 m-0">
        <div class="cellContainer border" @click="addMark(0,0)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[0][0] === 'X'}">
                {{ innerTable[0][0] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(0,1)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[0][1] === 'X'}">
                {{ innerTable[0][1] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(0,2)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[0][2] === 'X'}">
                {{ innerTable[0][2] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(1,0)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[1][0] === 'X'}">
                {{ innerTable[1][0] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(1,1)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[1][1] === 'X'}">
                {{ innerTable[1][1] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(1,2)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[1][2] === 'X'}">
                {{ innerTable[1][2] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(2,0)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[2][0] === 'X'}">
                {{ innerTable[2][0] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(2,1)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[2][1] === 'X'}">
                {{ innerTable[2][1] }}
            </div>
        </div>
        <div class="cellContainer border" @click="addMark(2,2)"
             :class="{'selectedTable': whichTableToPlay === tableNum && whichTableToPlay !== null}">
            <div class="opponent opponentOne mt-2 text-center" :class="{'opponentTwo': innerTable[2][2] === 'X'}">
                {{ innerTable[2][2] }}
            </div>
        </div>

        <!--  block overlay  -->
        <div class="blockOverlay" v-if="tableNum !== whichTableToPlay && whichTableToPlay !== null">
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TicTacToe2",
    props: {
        tableNum: {
            type: Number,
            require: true
        },
        whichTableToPlay: {
            type: Number,
            require: true
        },
        innerTable: {
            type: Array,
            require: true
        }
    },
    data() {
        return {}
    },
    methods: {
        addMark(x, y) {
            this.$emit("addMark", x, y, this.tableNum)
            // console.log("x = ", x)
            // console.log("y = ", y)
        }
    }
}
</script>

<style scoped>

.cellContainer {
    width: 33%;
    padding: 0 !important;
    height: 50px;
    cursor: pointer;
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
    font-size: 25px;

}

.opponentOne {
    color: #0d86ff;
}

.opponentTwo {
    color: #ff1717 !important;
}

.selectedTable {
    border: 1px solid gold !important;
}

.blockOverlay {
    position: absolute;
    background-color: rgba(249, 249, 249, 0.7);
    top: 0;
    left: 0;
    width: 150px;
    height: 153px;
    /*margin-top: 1px !important;*/
    z-index: 2;
}
</style>