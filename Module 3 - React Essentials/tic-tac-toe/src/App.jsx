import './App.scss';

import { players } from './data';

export const App = () => {
	return (
		<main>
			<div id='#game-container'>
				{/* Players */}
				<ol id='players'>
					<li className='player-name'>Player 1</li>
					<li className='player-symbol'>X</li>
					<li className='player-name'>Player 2</li>
					<li className='player-symbol'>O</li>
				</ol>
				{/* Game board */}
			</div>
		</main>
	);
};
