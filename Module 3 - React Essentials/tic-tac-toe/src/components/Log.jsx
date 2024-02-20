export const Log = () => {
	// Cannot manage the button that was clicked in this component because it is handled in App.jsx
	// Since which player turn is determined in the App.jsx, the state for the log
	// Also has to be handled in App component as well
	return <ol id='log'></ol>;
};
