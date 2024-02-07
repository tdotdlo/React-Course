import { useState } from 'react';
import { emptyGameboard } from '../../data';

export const Gameboard = () => {
	// sets thee state of the gameboard to be the multi-dimensional array
	const [playerMove, setPlayerMove] = useState(emptyGameboard);

	// handles where the piece goes when a player clicks on a square
	// parameters consist of rowIndex and colIndex bc we need to update that field
	const handlePlayerMove = (playerMoveRow, playerMoveCol) => {
		console.warn('clicked');
		// prevPlayerMove (curr state) is called by React automatically. This will update
		// the STATE immediately rather than having a time in the future
		setPlayerMove((prevPlayerMove) => {
			// This will update the origial array in memory when the state update by React happens
			// prevPlayerMove[rowMoved][colMoved] = 'X';

			prevPlayerMove.map((innerArray, i) => console.log(innerArray, i));
			const updatedBoard = [...prevPlayerMove.map((innerArray) => [...innerArray])];
			updatedBoard[playerMoveRow][playerMoveCol] = 'X';

			return updatedBoard;
		});
	};

	return (
		<ol id='game-board'>
			{playerMove.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerPiece, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() => {
										handlePlayerMove(rowIndex, colIndex);
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
