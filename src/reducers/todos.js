const todo = (state = [], action) => {
    switch (action.type) {
    case 'TOGGLE_TODO':
        if (state.id === action.id) {
            return {
                ...state,
                completed: !state.completed
            };
        };
        return state;
    default:
        return state
    };
};

const todos = (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];

    case 'TOGGLE_TODO':
        return state.map((item) => {
            return todo(item, action);
        });
    default:
        return state;
    }
};

export default todos;
