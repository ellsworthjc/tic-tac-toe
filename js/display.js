/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function displayX(cell) {
	cell.querySelector("[data-x]").style.display = "block";
	cell.querySelector("[data-o]").style.display = "none";
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function displayO(cell) {
	cell.querySelector("[data-x]").style.display = "none";
	cell.querySelector("[data-o]").style.display = "block";
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function displayEmpty(cell) {
	cell.querySelector("[data-x]").style.display = "none";
	cell.querySelector("[data-o]").style.display = "none";
}

