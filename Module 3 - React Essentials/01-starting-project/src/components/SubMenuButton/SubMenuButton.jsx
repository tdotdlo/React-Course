import './SubMenuButton.scss';

// onSomething - usually signify that this prop will trigger an action / event
export const SubMenuButton = ({ children, onUserClick }) => {
	const buttContent = children;

	return (
		<li>
			{/* Must use a callback fn in the prop if you put parentheses */}
			<button onClick={onUserClick}>{buttContent}</button>
		</li>
	);
};
