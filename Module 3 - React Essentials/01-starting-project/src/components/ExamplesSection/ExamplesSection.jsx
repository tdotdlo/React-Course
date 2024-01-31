import { useState } from 'react';
import { SubMenuButton } from '../SubMenuButton/SubMenuButton';

import { buttonContent, dynamicContentMenu } from '../../utils/data';

import './ExamplesSection.scss';

export const ExamplesSection = () => {
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
		<section id='examples'>
			<h2>Examples</h2>
			<menu>
				{buttonContent.map((eachLabel, i) => (
					<SubMenuButton
						key={i + 1}
						selectedTopic={topicChosen === eachLabel}
						onUserClick={() => handleClick(eachLabel)}
					>
						{eachLabel}
					</SubMenuButton>
				))}
			</menu>
			{dynamicContent}
		</section>
	);
};
