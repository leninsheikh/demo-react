const initialState = {
    appName: 'DEMO REACT',
    users: [{
        id: 'xzxzxz',
        username: 'Mr React',
        email: 'a@a.aa'
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: state.users.concat(action.user)
            };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            };
        default:
            return state;
    }
}

export default reducer;