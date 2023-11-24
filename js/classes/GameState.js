import * as display from ".././display.js";
import * as logic from ".././logic.js";
import * as mm from "../minimax.js";

export class GameState {
	constructor(config) {
		config = config ?? {};
		this.board = config.board ?? ["","","","","","","","","",];
		this.isGameOver = config.isGameOver ?? false;
		this.winner = config.winner ?? "";
		this.initialSetup = true;
		this.players = {
			maximizing: "X",
			minimizing: "O"
		};
		this.ai = config.ai ?? "X";
		this.human = this.ai === "X" ? "O" : "X";
		this.playerTurn = this.board.filter(cell => cell === "X").length === this.board.filter(cell => cell === "O").length ? "X" : "O";
	}

	init() {
		display.refreshBoard(this.board);
		this.resetListeners();
		console.log("Game set up.");
		this.setPlayerTurn();
	}

	takeTurn(cell) {
		if (this.board[cell] != "") {
			console.log("Please choose an empty cell")
			return;
		}
		if (this.playerTurn === this.ai) {
			this.board[cell] = this.ai;
		} else {
			this.board[cell] = this.human;
		}

		display.refreshBoard(this.board);
		this.resetListeners();

		let gameEndResult = logic.checkForGameEnd(this.board);
		if (!gameEndResult) {
			this.setPlayerTurn();
		} else {
			this.winner = gameEndResult.winner;
			this.endGame();
		}
	}

	setPlayerTurn() {
		if (!this.initialSetup) {
			this.playerTurn = this.playerTurn === this.ai ? this.human : this.ai;
		} else {
			this.initialSetup = false;
		}

		display.updateStateLabel(`${this.playerTurn}'s turn`);
		console.log(`${this.playerTurn}'s turn`);

		if (this.playerTurn === this.ai) {
			const move = mm.takeAITurn(this.board, this.players);
			console.log(`%cAI taking turn at cell: ${move}`, "color: cyan;");
			this.takeTurn(move);
		}
	}

	endGame() {
		if (this.winner === "Draw") {
			display.updateStateLabel("Draw");
			console.log("Game Over: Draw");
		} else {
			display.updateStateLabel(`${this.winner} wins!`, "animate-bounce");
			console.log(`Game Over: ${this.winner} wins!`);
		}
	}

	resetListeners() {
		const cells = document.querySelectorAll("[data-board-cell]");
		for (const cell of cells) {
			cell.addEventListener("click", () => this.takeTurn(cell.dataset.boardCell));
		};
	}
}