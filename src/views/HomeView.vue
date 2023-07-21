<template>
    <div id="HomeView">
        <div class="border rounded pb-5 my-5 mx-auto background shadow">
            <div class="d-flex flex-column flex-lg-row flex-md-column flex-sm-column">
                <div class="card mx-5 mx-sm-auto my-5" style="width: 18rem;">
                    <img src="../assets/aiTictacToe.png" class="card-img-top cardImg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Tic tac toe</h5>
                        <p class="card-text">A classic Player vs CPU Tic tac toe.</p>
                        <router-link to="ai-ticTacToe" class="btn btn-primary px-5">Play</router-link>
                        <button class="btn btn-outline-info ms-4"
                                @click="showRulesDiv('classic','rules')">Rules
                        </button>
                    </div>
                </div>
                <div class="card mx-5 mx-sm-auto my-5" style="width: 18rem;">
                    <img src="../assets/ticTacToe.png" class="card-img-top cardImg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Tic tac toe</h5>
                        <p class="card-text">A classic Player vs Player Tic tac toe.</p>
                        <router-link to="ticTacToe" class="btn btn-primary px-5">Play</router-link>
                        <button class="btn btn-outline-info ms-4"
                                @click="showRulesDiv('classic','rules')">Rules
                        </button>
                    </div>
                </div>
                <div class="card mx-5 mx-sm-auto my-5" style="width: 18rem;">
                    <img src="../assets/ultimate.png" class="card-img-top cardImg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Ultimate Tic tac toe</h5>
                        <p class="card-text">An Ultimate Player vs Player Tic tac toe.</p>
                        <router-link to="ultimate-ticTacToe" class="btn btn-primary px-5">Play</router-link>
                        <button class="btn btn-outline-info ms-4"
                                @click="showRulesDiv('ultimate','rules')">Rules
                        </button>
                    </div>
                </div>
            </div>
            <div ref="rules" class="container border rounded mt-2 mb-5 bg-white" v-show="showRules === 'classic'">
                <h4 class="mt-3">Classic Tic tac toe Rules</h4>
                <div class="description p-3">In a game of tic-tac-toe, there are two players who take turns making
                    moves.
                    Each
                    player has a
                    specific role and uses a specific symbol to represent their moves on the game board.
                    <ol>
                        <li>
                            Player O: This player is commonly referred to as "Player O" or "Player 1." They typically go
                            first
                            in the game and use the symbol 'O' to mark their moves on the board.
                        </li>
                        <li>
                            Player X: This player is commonly referred to as "Player X" or "Player 2." They go second in
                            the
                            game and use the symbol 'X' to mark their moves on the board.
                        </li>

                    </ol>
                    The roles of Player X and Player O alternate throughout the game until one of the players wins or
                    the game ends in a tie. The objective for both players is to get three of their marks ('X' or 'O')
                    in a row horizontally, vertically, or diagonally.
                </div>
            </div>
            <div ref="rules" class="container border rounded mt-2 mb-5 bg-white" v-show="showRules === 'ultimate'">
                <h4 class="mt-3">Ultimate Tic tac toe Rules</h4>
                <div class="description p-3"> Ultimate Tic-Tac-Toe is a more advanced version of the classic Tic-Tac-Toe
                    game. It consists of nine smaller Tic-Tac-Toe boards arranged in a 3x3 grid. The objective is to win
                    three small boards in a row to ultimately win the game.
                    <br>
                    In Ultimate Tic-Tac-Toe, players take turns placing their marks (usually X and O) on the board. The
                    first player is typically O, and the second player is X. The rules for placing marks are as follows:
                    <ol>
                        <li>
                            The first move can be made anywhere on the board.
                        </li>
                        <li>
                            Each subsequent move corresponds to a specific board determined by the opponent's previous
                            move. For
                            example, if your opponent places their mark in the top-right cell of a small board, then you
                            must
                            make your move in the top-right board.
                        </li>
                        <li>
                            If a small board is already won by a player or ends in a tie, that board is considered
                            "completed,"
                            and any subsequent moves can be made in any unfilled cell of any other incomplete board.
                        </li>
                        <li>
                            When it's your turn to play in a specific small board, you must win that board to gain
                            control of
                            it. To win a small board, you need to get three of your marks in a row horizontally,
                            vertically, or
                            diagonally within that board.
                        </li>
                        <li>
                            If a player sends their opponent to a completed board, the opponent can choose any open cell
                            on any
                            incomplete board.
                        </li>
                        <li>
                            The game is won when a player has won three small boards in a row either horizontally,
                            vertically,
                            or diagonally across the large 3x3 grid.
                        </li>
                    </ol>
                    The strategy in Ultimate Tic-Tac-Toe involves thinking not only about the immediate move but also
                    which board to send your opponent to. You should aim to win small boards strategically to secure a
                    win on the overall grid.
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HomeView",
    data() {
        return {
            showRules: null
        }
    },
    methods: {
        showRulesDiv(whichRules) {
            if (this.showRules === whichRules) {
                this.showRules = null
                return
            }
            if (whichRules === 'classic') {
                this.showRules = 'classic'
            } else {
                this.showRules = 'ultimate'
            }
        }
    }
}

</script>

<style scoped>
#HomeView{
    height: 100vh;
    //background-color: #0d86ff;
}

.cardImg {
    height: 200px !important;
    border-bottom: 1px #D2D2D2 solid;
    object-fit: fill;
    aspect-ratio: auto 100 / 100;
}

.background {
    position: absolute;
    right: 0;
    left: 0;
    width: 80vw;
    background-color: rgba(245, 245, 245, 0.79);
}

.description {
    text-align: justify;
}

ol li {
    font-weight: bold;
}
</style>