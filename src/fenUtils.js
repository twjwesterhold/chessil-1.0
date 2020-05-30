const isValidFen = (fen) => {
	// fen must be a string
	if (typeof fen !== "string") {
		return false;
	}

	// cut off move and castling data
	var fenTest = fen.split(" ", 1)[0];
	// expand empty squares
	fenTest = expandFenEmptySquares(fenTest);

	// separate into chunks
	var ranks = fenTest.split("/");

	// check that each row has data for 8 squares
	if (ranks.length !== 8) {
		return false;
	}

	// check each row contains only valid FEN characters
	for (var i = 0; i < 8; i++) {
		if (ranks[i].length !== 8 ||
        ranks[i].search(/[^pnbrqk1]/i) !== -1) {
			return false;
		}
	}

	// will be valid here, ignoring move and castling data at this point in development
	return true;
};

const expandFenEmptySquares = (fen) => {
	// replace multiple empty squares with an equivalent number of ones
	var fenTemp = fen;
	return fenTemp.replace(/2/g, "11")
		.replace(/3/g, "111")
		.replace(/4/g, "1111")
		.replace(/5/g, "11111")
		.replace(/6/g, "111111")
		.replace(/7/g, "1111111")
		.replace(/8/g, "11111111");
};

const getBoardFromFen = (fen) => {
	if (!isValidFen(fen)) {
		return false;
	}

	var fenTemp = fen.split(" ", 1)[0];
	fenTemp = expandFenEmptySquares(fenTemp);

	var rows = fenTemp.split("/");
	var position = [];

	for (var i = 0; i <= 7; i++) {
		for (var j = 0; j <= 7; j++) {
			position.push({rank: "", file: "", piece: "", isWhite: "",});
			var curr = j + 8*i;
			position[curr].rank = i;
			position[curr].file = j;
			position[curr].piece = (rows[i].charAt(j) !== "1") ? rows[i].charAt(j) : " ";
			position[curr].isWhite = ((i+j)%2 === 0) ? true : false;
		}
	}

	return position;
};

export {
	getBoardFromFen,
	isValidFen,
	expandFenEmptySquares
};