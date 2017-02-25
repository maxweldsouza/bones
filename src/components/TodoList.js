import React from 'react';

const TodoList = ({ todos }) => (
    <ul>
        {todos.map(todo =>
            <span>{todo.text}</span>
        )}
    </ul>
)

export default TodoList;
