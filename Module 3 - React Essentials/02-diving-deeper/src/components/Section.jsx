// {...variableName} = rest operator - obj groups together all props

export const Section = ({ title, children, ...componentAttributes }) => {
	// Logs all the obj key: value pairs
	console.log(componentAttributes);
	// This will remapp the prop value to sectionContent
	const sectionContent = children;
	return (
		<>
			<h2>{title}</h2>
			{/* spreads the remaining props across the element attributes 
			could come in handy if lots of props 
			DRYER code */}
			<section {...componentAttributes}>{sectionContent}</section>
		</>
	);
};
