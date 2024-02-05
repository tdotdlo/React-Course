import './Button.scss';

export const Button = ({ children, mode, Icon, ...buttAtt }) => {
	//passes content inbetween component (in App.jsx)
	const buttonContent = children;

	// Checks to see if mode is undefined, if it is, concat the className.
	// If it is false, use button filled-button
	const allClasses = mode ? `button ${mode}-button` : 'button filled-button';

	const dynamicButton = Icon ? (
		// Using curly braces around {allClasses.concat(' icon-button)}
		// bc returning JSX
		<button className={allClasses.concat(' icon-button')} {...buttAtt}>
			<span className='button-icon'>
				<Icon />
			</span>
			<span>{buttonContent}</span>
		</button>
	) : (
		// Using curly braces around {allClasses} bc returning JSX
		<button className={allClasses} {...buttAtt}>
			<span>{buttonContent}</span>
		</button>
	);

	return dynamicButton;
};
