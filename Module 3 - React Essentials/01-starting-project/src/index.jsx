import ReactDOM from 'react-dom/client';

import { App } from './App.jsx';
import './index.css';

// This queries the index.html doc to look for the element with the id of 'root'.
// It is a div which is in the index.html file and NOT in the App.jsx file.
// It uses an obj proeprty within ReactDOM, 'createRoot', to render the component
// for the browser to understand .jsx
const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint).render(<App />);
