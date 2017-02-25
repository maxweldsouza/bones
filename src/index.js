import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import './index.scss';

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App
                todos={store.getState()}
                onClick={text => store.dispatch({ type: 'ADD_TODO', text })}/>
        </Provider>,
        document.getElementById('root')
        );
};

render();
store.subscribe(render);
