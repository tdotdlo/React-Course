import { emptyGameboard } from '../../data';

export const Gameboard = () => {
	return (
		<ol id='game-board'>
			{emptyGameboard.map((row, i) => (
				<li key={i}>
					<ol>
						{row.map((playerPiece, colIndex) => (
							<li key={colIndex}>
								<button>{playerPiece}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};
