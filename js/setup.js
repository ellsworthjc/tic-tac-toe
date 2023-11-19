import * as logic from "./logic.js";
import * as display from "./display.js";
import * as game from "./game.js";

export function setup() {
	const board = document.querySelectorAll("[data-board-cell]");

	for (const cell of board) {
		display.displayEmpty(cell);
		cell.addEventListener("click", () => {
			// cycle through X, O, empty
			const cellValue = logic.getCellValue(cell);
			if (cellValue === "") {
				display.displayX(cell);
			} else if (cellValue === "X") {
				display.displayO(cell);
			} else {
				display.displayEmpty(cell);
			};

			game.checkForWin(board);
		});
	};
}