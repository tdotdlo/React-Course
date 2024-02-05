import { Button } from './components/Button/Button';
import { HomeIcon } from './components/HomeIcon';
import { PlusIcon } from './components/PlusIcon';

export const App = () => {
	return (
		<div id='app'>
			<section>
				<h2>Filled Button (Default)</h2>
				<p>
					{/* Default - Children prop  */}
					<Button>Default</Button>
				</p>
				<p>
					{/* Filled (Default) - Children prop  */}
					<Button mode='filled'>Filled (Default)</Button>
				</p>
			</section>
			<section>
				<h2>Button with Outline</h2>
				<p>
					{/* Outline - Children prop  */}
					<Button mode='outline'>Outline</Button>
				</p>
			</section>
			<section>
				<h2>Text-only Button</h2>
				<p>
					{/* Text - Children prop  */}
					<Button mode='text'>Text</Button>
				</p>
			</section>
			<section>
				<h2>Button with Icon</h2>
				<p>
					{/* Home - Children prop  */}
					{/* Icon Component receiving HomeIcon component*/}
					<Button Icon={HomeIcon}>Home</Button>
				</p>
				<p>
					{/* Icon Comopnent receiving PlusIcon component */}
					<Button Icon={PlusIcon} mode='text'>
						Add
					</Button>
				</p>
			</section>
			<section>
				<h2>Buttons Should Support Any Props</h2>
				<p>
					{/* Disabled - Children Prop */}
					<Button mode='filled' disabled>
						Disabled
					</Button>
				</p>
				<p>
					<Button onClick={() => console.log('Clicked!')}>Click me</Button>
				</p>
			</section>
		</div>
	);
};
