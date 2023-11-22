import { GameState } from "./js/classes/GameState.js";

// const game = new GameState();

// this is a test gamestate where X should immediately play the winning square if minimax is working correctly
const game = new GameState({
	board: ["X","","O","X","","X","O","O",""],
});
game.init();
