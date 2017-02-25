import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './components/App';
import './index.scss';

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <App
            count={store.getState()}
            onClick={() => store.dispatch({ type: 'INCREMENT' })}/>,
            document.getElementById('root')
        );
};

render();
store.subscribe(render);
