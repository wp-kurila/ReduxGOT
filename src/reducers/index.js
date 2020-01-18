const initialState = {
    char: {},
    spinner: true,
    error: false,
    visible: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHAR_LOADED':
            return {
                ...state,
                char: action.payload,
                spinner: false
            };
        case 'CHAR_REQUESTED':
            return {
                ...state,
                spinner: true
            };
        case 'CHAR_ERROR':
            return {
                ...state,
                error: true,
                spinner: false
            };
        case 'TOGGLE_BTN':
            return {
                ...state,
                visible: !state.visible 
            };
        default:
            return state;
    }
}

export default reducer;