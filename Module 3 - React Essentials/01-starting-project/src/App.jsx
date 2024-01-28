import { useState } from 'react';

import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import { SubMenuButton } from './components/SubMenuButton/SubMenuButton.jsx';

import { coreConceptsInfo, buttonContent, dynamicContentMenu } from './utils/data.js';

export const App = () => {
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
		<>
			<Header />
			<main>
				<h2>Core Concepts for React</h2>
				<section id='core-concepts'>
					<div className='core-concepts-container'>
						{coreConceptsInfo.map((eachConcept, i) => (
							<CoreConcept
								conceptImage={eachConcept.image}
								conceptHeader={eachConcept.title}
								conceptDescription={eachConcept.description}
								key={`${i + 1}`}
							/>
						))}
					</div>
				</section>
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
			</main>
		</>
	);
};
