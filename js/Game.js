<<<<<<< HEAD
// Going to represent a single game of chess
export default class Game {
    // constructor() {
    //     // What happens when you start a new game of chess?
    //     this.turn = "White";
    //     this.board = new Array(64).fill(null);
    // }

    // if the current turn is white then make it black and vice versa
    // nextTurn() {
    //     this.turn = this.turn == "White" ? "Black" : "White";
    // }

    // // make the chess move
    // makeMove(i) {
    //     this.board[i] = this.turn
    //     this.nextTurn();
    // }
}
=======
// Going to represent a single game of Chess
export default class Game {
    constructor() {
        // What happens when you start a new game of chess?
        this.turn = "X";
        this.board = new Array(9).fill(null);        // an array of 9 elements

    }

    nextTurn() {
        // if the current turn is X then make it O,
        // if the current turn is O then make it X
        this.turn = this.turn === "X" ? "O" : "X"
    }

    makeMove(i) {
        if (!this.isInProgress()) {
            return;
        }

        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;

        if (!this.findWinningCombination()) {
            this.nextTurn();
        }
    
    }

    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
    
            if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }
        }
        return null;
    }

    isInProgress() {
        // if there is no winning Combinationination, the game is currently in progress
        return !this.findWinningCombination() && this.board.includes(null);
    }

    // if they want to make a move at index 6 twice,
    // we don't want it to override what's already there
}










// findWinningCombination() {
    // const winningCombinations = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    // ];

//     for (const combination of winningCombinations) {
//         const [a, b, c] = combination;

//         if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
//             return combination;
//         }
//     }
//     return null;
// }
>>>>>>> 0695864dc9022b2cea3e52751c4a1545df9bce6a
