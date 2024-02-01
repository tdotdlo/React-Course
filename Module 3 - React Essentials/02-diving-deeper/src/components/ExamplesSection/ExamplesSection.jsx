import { useState } from 'react';
import { SubMenuButton } from '../SubMenuButton/SubMenuButton';
import { Section } from '../Section';
import { buttonContent, dynamicContentMenu } from '../../utils/data';

import './ExamplesSection.scss';

export const ExamplesSection = () => {
	// Moved State here so that only this component is rendered and NOT the entire app
	const [topicChosen, setTopicChosen] = useState(undefined);

	const handleClick = (tabCaption) => {
		setTopicChosen(tabCaption);
	};

	const dynamicContent = topicChosen ? (
		<div id='tab-content'>
			<h3>{dynamicContentMenu[topicChosen.toLowerCase()].title}</h3>
			<p>{dynamicContentMenu[topicChosen.toLowerCase()].description}</p>
			<pre>
				<code>{dynamicContentMenu[topicChosen.toLowerCase()].code}</code>
			</pre>
		</div>
	) : (
		<p>Please Select a Topic </p>
	);

	return (
		<Section id='examples'>
			<h2>Examples</h2>
			<menu>
				{buttonContent.map((eachLabel, i) => (
					<SubMenuButton
						key={i + 1}
						selectedTopic={topicChosen === eachLabel}
						// Do not to set a custom prop because it was defined by us
						// onUserClick={() => {
						// 	handleClick(eachLabel);
						// }}
						// Since we are using the spread operator in the component, you would just call in the built in event handler as the prop
						onClick={() => handleClick(eachLabel)}
					>
						{eachLabel}
					</SubMenuButton>
				))}
			</menu>
			{dynamicContent}
		</Section>
	);
};
