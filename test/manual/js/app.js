/*jslint node: true, plusplus: true, devel: true, browser: true*/
/*globals $, Chess, Chessboard, ChessUtils*/

'use strict';

var chess,
	board;

function updateGameInfo(status) {
	$('#info-status').html(status);
	$('#info-fen').html(chess.fen());
	$('#info-pgn').html(chess.pgn());
}

function resetGame() {
	board.setPosition(ChessUtils.FEN.startId);
	chess.reset();

	updateGameInfo('Next player is white.');
}

function pieceMove(move) {

	var nextPlayer,
		status,
		chessMove = chess.move({
			from: move.from,
			to: move.to,
			promotion: 'q'
		});


	nextPlayer = 'white';
	if (chess.turn() === 'b') {
		nextPlayer = 'black';
	}

	if (chessMove !== null) {
		if (chess.in_checkmate() === true) {
			status = 'CHECKMATE! Player ' + nextPlayer + ' lost.';
		} else if (chess.in_draw() === true) {
			status = 'DRAW!';
		} else {
			status = 'Next player is ' + nextPlayer + '.';

			if (chess.in_check() === true) {
				status = 'CHECK! ' + status;
			}
		}

		updateGameInfo(status);
	}

	return chess.fen();
}

function pieceSelected(notationSquare) {
	var i,
		movesNotation,
		movesPosition = [];

	movesNotation = chess.moves({square: notationSquare, verbose: true});
	for (i = 0; i < movesNotation.length; i++) {
		movesPosition.push(ChessUtils.convertNotationSquareToIndex(movesNotation[i].to));
	}
	return movesPosition;
}


function updateUserInputEnabledInfo() {
	$('#isUserInputEnabled').html('User input is ' + (board.isUserInputEnabled() ? 'enabled' : 'disabled'));
}

$(document).ready(function () {
	chess = new Chess();
	board = new Chessboard('board', {
		position: ChessUtils.FEN.startId,
		eventHandlers: {
			onPieceSelected: pieceSelected,
			onMove: pieceMove
		}
	});
	
	$('#btn-reset-game').click(function () {
		resetGame();
	});
	resetGame();

	//UserInputEnabled
	updateUserInputEnabledInfo();
	$('#btnEnableUserInput').click(function () {
		board.enableUserInput(true);
		updateUserInputEnabledInfo();
	});
	$('#btnDisableUserInput').click(function () {
		board.enableUserInput(false);
		updateUserInputEnabledInfo();
	});

});


