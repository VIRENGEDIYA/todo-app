import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = createStore(rootReducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,	
	document.getElementById('root')
	)
