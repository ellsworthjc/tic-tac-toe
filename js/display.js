/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function displayX(cell) {
	cell.querySelector("[data-x]").style.display = "block";
	cell.querySelector("[data-o]").style.display = "none";
	console.log("Cell made X");
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function displayO(cell) {
	cell.querySelector("[data-x]").style.display = "none";
	cell.querySelector("[data-o]").style.display = "block";
	console.log("Cell made O");
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function displayEmpty(cell) {
	cell.querySelector("[data-x]").style.display = "none";
	cell.querySelector("[data-o]").style.display = "none";
	console.log("Cell made empty");
}

