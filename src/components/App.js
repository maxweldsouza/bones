// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

class App extends Component {
    render () {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React !</h2>
                </div>
                <p>
                    <AddTodo />
                    <VisibleTodoList />
                    <Footer />
                </p>
            </div>
        );
    }
}

export default App;
