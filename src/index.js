import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//Podemos pasar props tb para los componentes containers
ReactDOM.render(<App title="Que mira gato" />, document.getElementById('root'));
registerServiceWorker();
