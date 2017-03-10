import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import reducer from './reducers';
import App from './components/App';
import './index.scss';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-enable */

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/(:filter)' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
