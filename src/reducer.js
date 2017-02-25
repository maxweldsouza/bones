export default (state = [], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [...state, { text: action.text, id: state.length + 1 }];
    default:
        return state;
    }
};
