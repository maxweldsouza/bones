export default (state = [{ id: 0, text: 'First todo' }], action) => {
    switch (action.type) {
    case 'ADD_TODO':
        return [...state, { text: action.text, id: state.length + 1 }];
    default:
        return state;
    }
};
