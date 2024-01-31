import './SubMenuButton.scss';

export const SubMenuButton = ({ children, onUserClick, selectedTopic }) => {
	const buttContent = children;

	return (
		<li>
			<button
				type='button'
				className={selectedTopic ? 'active' : undefined}
				onClick={(e) => {
					onUserClick();
				}}
			>
				{buttContent}
			</button>
		</li>
	);
};
