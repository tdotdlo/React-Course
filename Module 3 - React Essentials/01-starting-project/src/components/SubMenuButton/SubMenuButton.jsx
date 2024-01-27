import './SubMenuButton.scss';

// onSomething - usually signify that this prop will trigger an action / event
export const SubMenuButton = ({ children, onUserClick }) => {
	const buttContent = children;

	return (
		<li>
			{/* Must use a callback fn in the component attribute if you have parentheses 
			the fn is no longer a callback fn and it will run right away*/}
			<button onClick={onUserClick}>{buttContent}</button>
		</li>
	);
};
