import { GameState } from "./js/classes/GameState.js";


if (false) {
	const game = new GameState();
	game.init();
} else {
	// test gamestate where X should immediately play the winning square if minimax is working correctly
	// const game = new GameState({
	// 	board: ["X","","O","X","","X","O","O",""],
	// });

	// test gamestate partially filled but still requiring depth of checking
	const game = new GameState({
		board: ["","","","","O","","","","X"],
		// ai: "O"
	});

	game.init();
}
