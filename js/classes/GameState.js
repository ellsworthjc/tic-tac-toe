import * as display from ".././display.js";
import * as logic from ".././logic.js";

export class GameState {
	constructor(config) {
		config = config ?? {};
		this.playerTurn = config.playerTurn ?? "X";
		this.board = config.board ?? [];
		this.isGameOver = config.isGameOver ?? false;
		this.winner = config.winner ?? "";
		this.initialSetup = true;
	}

	init() {
		const cells = document.querySelectorAll("[data-board-cell]");
		for (const cell of cells) {
			display.displayEmpty(cell);
			cell.addEventListener("click", () => this.takeTurn(cell));
		}
		console.log("Game set up.");
		this.setPlayerTurn();
		this.initialSetup = false;
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

	setPlayerTurn() {
		if (!this.initialSetup) {
			this.playerTurn = this.playerTurn === "X" ? "O" : "X";
		}
		const stateLabel = document.querySelector("[data-state-label]");
		stateLabel.innerText = `${this.playerTurn}'s turn`;
		console.log(`${this.playerTurn}'s turn`);
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
		}
		// middle row
		else if (logic.allEqualAndNotEmpty([board[3], board[4], board[5]])) {
			this.isGameOver = true;
			this.winner = board[3];
		}
		// bottom row
		else if (logic.allEqualAndNotEmpty([board[6], board[7], board[8]])) {
			this.isGameOver = true;
			this.winner = board[6];
		}
		// left column
		else if (logic.allEqualAndNotEmpty([board[0], board[3], board[6]])) {
			this.isGameOver = true;
			this.winner = board[0];
		}
		// middle column
		else if (logic.allEqualAndNotEmpty([board[1], board[4], board[7]])) {
			this.isGameOver = true;
			this.winner = board[1];
		}
		// right column
		else if (logic.allEqualAndNotEmpty([board[2], board[5], board[8]])) {
			this.isGameOver = true;
			this.winner = board[2];
		}
		// top left to bottom right diagonal
		else if (logic.allEqualAndNotEmpty([board[0], board[4], board[8]])) {
			this.isGameOver = true;
			this.winner = board[0];
		}
		// bottom right to top left diagonal
		else if (logic.allEqualAndNotEmpty([board[6], board[4], board[2]])) {
			this.isGameOver = true;
			this.winner = board[6];
		}
		// game is a draw
		else if (board.every(cell => cell != "")) {
			this.isGameOver = true;
			this.winner = "";
		}
		// game continues
		else {
			console.log("No win yet...");
			this.setPlayerTurn();
			return false;
		}

		if (this.isGameOver) {
			this.endGame();
		}
	}

	endGame() {
		const stateLabel = document.querySelector("[data-state-label]");
		if (this.winner === "") {
			stateLabel.innerText = "Draw";
			console.log("Draw")
		} else {
			stateLabel.classList.add("animate-bounce");
			stateLabel.innerText = `${this.winner} wins!`;
			console.log(`${this.winner} wins!`)
		}
	}
}