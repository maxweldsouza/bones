// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { count: 0 };
        this.onClick = this.onClick.bind(this);
    }
    onClick () {
        this.setState({ count: this.state.count + 1 });
    }
    render () {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React !</h2>
                </div>
                <p>
                    This button has been clicked {this.state.count} times.
                    <button onClick={this.onClick}>Click Me</button>
                </p>
            </div>
        );
    }
}

export default App;
