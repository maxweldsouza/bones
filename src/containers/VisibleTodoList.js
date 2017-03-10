import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
    case 'all':
        return todos;
    case 'completed':
        return todos.filter(t => t.get('completed'));
    case 'active':
        return todos.filter(t => !t.get('completed'));
    default:
        return todos;
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            ownProps.filter
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id =>
        dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    };
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
