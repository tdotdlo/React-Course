import './SubMenuButton.scss';

export const SubMenuButton = ({ children }) => {
	const buttContent = children;

	return (
		<li>
			<button>{buttContent}</button>
		</li>
	);
};
