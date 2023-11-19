/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function getCellValue(cell) {
	const xCell = cell.querySelector("[data-x]");
	const oCell = cell.querySelector("[data-o]");
	if (xCell.style.display === "block" && oCell.style.display === "none") {
		// console.log("Cell value: X");
		return "X";
	} else if (xCell.style.display === "none" && oCell.style.display === "block") {
		// console.log("Cell value: O");
		return "O";
	} else if (xCell.style.display === "none" && oCell.style.display === "none") {
		// console.log("Cell value: ");
		return "";
	} else {
		console.log("Invalid Board");
		return "Invalid Board";
	}
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function isXCell(cell) {
	console.log(cell.querySelector("[data-x]").style.display === "block");
	return cell.querySelector("[data-x]").style.display === "block";
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function isOCell(cell) {
	console.log(cell.querySelector("[data-o]").style.display === "block");
	return cell.querySelector("[data-o]").style.display === "block";
}

/**
 *
 * @param {HTMLElement} cell
 * @returns
 */
export function isEmptyCell(cell) {
	const xCell = cell.querySelector("[data-x]");
	const oCell = cell.querySelector("[data-o]");
	console.log(xCell.style.display === "none" && oCell.style.display === "none");
	return xCell.style.display === "none" && oCell.style.display === "none";
}
