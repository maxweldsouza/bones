// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { text: '' };
        this.onTextChange = this.onTextChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    onTextChange (e) {
        this.setState({ text: e.target.value });
    }
    onClick () {
        this.setState({ text: '' });
        this.props.onClick(this.state.text);
    }
    render () {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React !</h2>
                </div>
                <p>
                    {this.props.todos.map(todo => {
                        return <div>{todo.text}</div>;
                    })}
                    <input type="text" onChange={this.onTextChange} value={this.state.text} />
                    <button onClick={this.onClick}>Click Me</button>
                </p>
            </div>
        );
    }
}

export default App;
