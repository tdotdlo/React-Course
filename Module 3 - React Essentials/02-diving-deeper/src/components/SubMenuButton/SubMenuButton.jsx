import './SubMenuButton.scss';

export const SubMenuButton = ({ children, selectedTopic, ...buttonProps }) => {
	const buttContent = children;

	return (
		<li>
			<button type='button' className={selectedTopic ? 'active' : undefined} {...buttonProps}>
				{buttContent}
			</button>
		</li>
	);
};
