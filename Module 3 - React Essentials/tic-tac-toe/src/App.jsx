import { Player } from './components/Player/Player';

import './App.scss';

export const App = () => {
	return (
		<main>
			<div id='game-container'>
				{/* Players */}
				<ol id='players'>
					{/* Component Isolation - Player 1 instance of Player component is different from
					Player 2 Instance of Player component */}
					<Player name='Player 1' symbol='X' />
					<Player name='Player 2' symbol='O' />
				</ol>
				{/* Game board */}
				Gameboard
			</div>
		</main>
	);
};
