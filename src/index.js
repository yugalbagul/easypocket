import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './js/router';
import './styles/App.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
