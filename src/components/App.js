// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

class App extends Component {
    render () {
        return (
            <div className={styles.App}>
                <div className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <h2>Welcome to React !</h2>
                </div>
                <p>
                    <AddTodo />
                    <VisibleTodoList filter={this.props.params.filter || 'all'}/>
                    <Footer />
                </p>
            </div>
        );
    }
}

export default App;
