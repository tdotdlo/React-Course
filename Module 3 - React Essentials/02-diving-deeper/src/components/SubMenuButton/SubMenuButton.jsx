import './SubMenuButton.scss';

export const SubMenuButton = ({ children, onUserClick, selectedTopic }) => {
	const buttContent = children;

	return (
		<li>
			<button className={selectedTopic ? 'active' : undefined} onClick={onUserClick}>
				{buttContent}
			</button>
		</li>
	);
};
