export function minimax(node, depth, maximizingPlayer) {
	console.log("minimaxing");
	if (depth === 0 || isTerminalNode(node)) {
        return the heuristic value of node;
	}
    if (maximizingPlayer) {
        let value = Number.NEGATIVE_INFINITY;
        for (const child of node) {
			value = max(value, minimax(child, depth - 1, FALSE));
		};
        return value;
	}
    else { // minimizing player
		let value = Number.POSITIVE_INFINITY;
		for (const child of node) {
            value = min(value, minimax(child, depth - 1, TRUE))
		};
        return value
	}
}