import { useState } from 'react';
import { emptyGameboard } from '../../data';

export const Gameboard = ({ onPlayerTurn, currentTurn }) => {
	let gameboard = emptyGameboard;

	for (const turn of currentTurn) {
		const { squareLocation, player } = turn;
		const { row, col } = squareLocation;

		gameboard[row][col] = player;
	}

	// sets thee state of the gameboard to be the multi-dimensional array
	// const [playerMove, setPlayerMove] = useState(emptyGameboard);

	// STATE HAS BEEN LIFTED TO THE MAIN APP COMPONENT BC LOG AND GAMEBOARD NEED ACCESS TO THE NEW STATE

	// handles where the piece goes when a player clicks on a square
	// parameters consist of rowIndex and colIndex bc we need to update that field
	// const handlePlayerMove = (playerMoveRow, playerMoveCol) => {
	// 	prevPlayerMove (curr state) is called by React automatically. This will update
	// 	the STATE immediately rather than having a time in the future
	// 	setPlayerMove((prevPlayerMove) => {
	// This will update the origial array in memory when the state update by React happens
	// prevPlayerMove[rowMoved][colMoved] = 'X';
	// prevPlayerMove.map((innerArray, i) => console.log(innerArray, i));

	// Doing a deep copy of the original array since an array is a reference in memory and you do not want to affect the original multi-dimensional array.
	// 		const updatedBoard = [...prevPlayerMove.map((innerArray) => [...innerArray])];
	// 		updatedBoard[playerMoveRow][playerMoveCol] = activePlayerPiece;

	// 		return updatedBoard;
	// 	});

	// 	onPlayerTurn();
	// };

	return (
		<ol id='game-board'>
			{gameboard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerPiece, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => {
										onPlayerTurn(rowIndex, colIndex);
									}}
								>
									{playerPiece}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};