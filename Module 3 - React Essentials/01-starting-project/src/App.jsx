// Named imports use curly braces to import the file
import { useState } from 'react';

import { Header } from './components/Header/Header.jsx';
import { CoreConcept } from './components/CoreConcept/CoreConcept.jsx';
import { SubMenuButton } from './components/SubMenuButton/SubMenuButton.jsx';

import { coreConceptsInfo, buttonContent, dynamicContentMenu } from './utils/data.js';

export const App = () => {
	const [topicChosen, setTopicChosen] = useState(undefined);

	const handleClick = (tabCaption) => {
		setTopicChosen(tabCaption.toLowerCase());

		// This will printout the current state of the variable topicChosen until the component fn is re-rendered. It will always show the previous state.
		//since the component has not been 'refreshed'
	};

	// Option 3 - JSX to show content conditionally
	let dynamicContent = <p>Please Select a Topic!</p>;

	if (topicChosen) {
		dynamicContent = (
			<div id='tab-content'>
				<h3>{dynamicContentMenu[topicChosen].title}</h3>
				<p>{dynamicContentMenu[topicChosen].description}</p>
				<pre>
					<code>{dynamicContentMenu[topicChosen].code}</code>
				</pre>
			</div>
		);
	}

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
							// If you are passing a parameter to the function, use an anonymous
							// fn. Otherwise, the fn will run right away.

							// By creating an anonymous fn, this will control how arguments
							// / parameters are passed in the fn

							// onUserClick prop passes the action down to the component
							// so when the action happens, it will be on the component
							// itself

							<SubMenuButton
								key={i + 1}
								selectedTopic={topicChosen === eachLabel}
								onUserClick={() => handleClick(eachLabel)}
							>
								{eachLabel}
							</SubMenuButton>
						))}
					</menu>
					{/* Option 1 - Using Ternary Operator to show content conditionally */}
					{/* {topicChosen ? (
						<div id='tab-content'>
							<h3>{dynamicContentMenu[topicChosen].title}</h3>
							<p>{dynamicContentMenu[topicChosen].description}</p>
							<pre>
								<code>{dynamicContentMenu[topicChosen].code}</code>
							</pre>
						</div>
					) : (
						<p>Please select a topic!</p>
					)} */}
					{/* Option 2 - Using && Symbols to show content conditionally  */}
					{/* {!topicChosen && <p>Please select a topic!</p>}
					{topicChosen && (
						<div id='tab-content'>
							<h3>{dynamicContentMenu[topicChosen].title}</h3>
							<p>{dynamicContentMenu[topicChosen].description}</p>
							<pre>
								<code>{dynamicContentMenu[topicChosen].code}</code>
							</pre>
						</div> 
					)}*/}
					{dynamicContent}
				</section>
			</main>
		</>
	);
};
