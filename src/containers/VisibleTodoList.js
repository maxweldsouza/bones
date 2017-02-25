import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
    todos: state,
});

const mapDispatchToProps = {
    onTodoClick: addTodo
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
