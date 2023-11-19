import * as display from ".././display.js";
import * as logic from ".././logic.js";

export class GameState {
	constructor() {
		this.playerTurn = "X";
		this.board = ["","","","","","","","",""];
		this.isGameOver = false;
		this.winner = "";
	}

	init() {
		const cells = document.querySelectorAll("[data-board-cell]");
		for (const cell of cells) {
			display.displayEmpty(cell);
			cell.addEventListener("click", () => this.takeTurn(cell));
		}
		console.log("Game set up.");
		console.log(`${this.playerTurn}'s turn.`);
	}

	takeTurn(cell) {
		this.fillCell(cell);
	}

	fillCell(cell) {
		if (this.playerTurn === "X") {
			display.displayX(cell);
		} else {
			display.displayO(cell);
		}
		this.updateBoard();
	}

	changePlayerTurn() {
		this.playerTurn = this.playerTurn === "X" ? "O" : "X";
		console.log(`${this.playerTurn}'s turn.`);
	}

	updateBoard() {
		this.board = [];
		const cells = document.querySelectorAll("[data-board-cell]");
		for (const cell of cells) {
			this.board.push(logic.getCellValue(cell));
		}
		this.checkForGameEnd();
	}

	checkForGameEnd() {
		const board = this.board;
		// top row
		if (logic.allEqualAndNotEmpty([board[0], board[1], board[2]])) {
			this.isGameOver = true;
			this.winner = board[0];
			this.endGame();
		}
		// middle row
		else if (logic.allEqualAndNotEmpty([board[3], board[4], board[5]])) {
			this.isGameOver = true;
			this.winner = board[3];
			this.endGame();
		}
		// bottom row
		else if (logic.allEqualAndNotEmpty([board[6], board[7], board[8]])) {
			this.isGameOver = true;
			this.winner = board[6];
			this.endGame();
		}
		// left column
		else if (logic.allEqualAndNotEmpty([board[0], board[3], board[6]])) {
			this.isGameOver = true;
			this.winner = board[0];
			this.endGame();
		}
		// middle column
		else if (logic.allEqualAndNotEmpty([board[1], board[4], board[7]])) {
			this.isGameOver = true;
			this.winner = board[1];
			this.endGame();
		}
		// right column
		else if (logic.allEqualAndNotEmpty([board[2], board[5], board[8]])) {
			this.isGameOver = true;
			this.winner = board[2];
			this.endGame();
		}
		// top left to bottom right diagonal
		else if (logic.allEqualAndNotEmpty([board[0], board[4], board[8]])) {
			this.isGameOver = true;
			this.winner = board[0];
			this.endGame();
		}
		// bottom right to top left diagonal
		else if (logic.allEqualAndNotEmpty([board[6], board[4], board[2]])) {
			this.isGameOver = true;
			this.winner = board[6];
			this.endGame();
		}
		// game is a draw
		else if (board.every(cell => cell != "")) {
			console.log("It's a draw");
			this.isGameOver = true;
			this.winner = "";
			this.endGame();
		}
		// game continues
		else {
			console.log("No win yet...");
			this.changePlayerTurn();
			return false;
		}
	}

	endGame() {
		if (this.winner === "") {
			console.log(`It's a draw.`)
		} else {
			console.log(`${this.winner} wins!`)
		}
	}
}