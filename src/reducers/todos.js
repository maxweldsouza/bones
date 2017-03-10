import Immutable from 'immutable';

const todo = (state = Immutable.Map(), action) => {
    switch (action.type) {
    case 'TOGGLE_TODO':
        if (state.get('id') === action.id) {
            return state.set('completed', !state.get('completed'));
        }
        return state;
    default:
        return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            Immutable.Map({
                id: action.id,
                text: action.text,
                completed: false
            })
        ];

    case 'TOGGLE_TODO':
        return state.map(item => {
            return todo(item, action);
        });
    default:
        return state;
    }
};

export default todos;
