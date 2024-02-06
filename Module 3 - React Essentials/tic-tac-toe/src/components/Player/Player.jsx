import { useState } from 'react';

import './Player.scss';

export const Player = ({ name, symbol }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	const handleNameChange = () => {
		// Checks to see if isEditing state is false, if it is, switch to true, if true,
		// switch to false.
		// Not the best way to do it because this SCHEDULES the state to change at some point in the near future AND NOT INSTANT
		// This matters because it relies on the PREVIOUS state to update to the NEWEST state

		// setIsEditing(!isEditing);

		// Relies in the previous state, so therefore it is not updated right away.
		// setIsEditing(!isEditing); true
		// setIsEditing(!isEditing); true

		// This works the way it's supposed too
		setIsEditing((editing) => !editing); //true
		// setIsEditing((editing) => !editing); false
	};

	const handleNewName = (e) => {
		// target - targets the element which the  is changing
		// value - holds the value which the user has entered
		setPlayerName(e.target.value);
	};

	// Displays either an input field or span dependent on the state of isEditing.
	const displayNameContent = isEditing ? (
		// Predetermines the value in the <input> box
		// onChange wil provide the VALUE which was entered by the user and cals handleNewName
		// two way binding - when an event listener accepts the input, and then sets the state for a variable which then outputs the updated value
		<input type='text' value={playerName} onChange={handleNewName} required />
	) : (
		<span className='player-name'>{playerName}</span>
	);

	return (
		<li>
			<span className='player'>
				{/* Displays JSX from displayNameContent */}
				{displayNameContent}
				<span className='player-symbol'>{symbol}</span>
			</span>
			{/* Checks to state of is Editing and outputs the label */}
			<button onClick={handleNameChange}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	);
};
