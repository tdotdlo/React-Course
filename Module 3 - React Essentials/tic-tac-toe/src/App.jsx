import { useState } from 'react';

import { Player } from './components/Player/Player';
import { Gameboard } from './components/Gameboard/Gameboard';
import { Log } from './components/Log';

import './App.scss';

export const App = () => {
	const [activePlayer, setActivePlayer] = useState('X');
	// const [playerTurn, setPlayerTurn] = useState([]);

	const handlePlayerTurn = () => {
		setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));
	};

	return (
		<main>
			<div id='game-container'>
				{/* Players */}
				<ol id='players' className='highlight-player'>
					{/* Component Isolation - Player 1 instance of Player component is different from
					Player 2 Instance of Player component */}
					<Player name='Player 1' symbol='X' isActive={activePlayer === 'X'} />
					<Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
				</ol>
				{/* Game board */}
				<Gameboard onPlayerTurn={handlePlayerTurn} activePlayerPiece={activePlayer} />
			</div>
			<Log />
		</main>
	);
};
