const initialState = {
    char: {},
    loading: true,
    error: false,
    charVisible: true,
    charList: null,
    charId: null,
    itemDetails: null,
    itemDetailsVisible: false,
    itemLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHAR_LOADED':
            return {
                ...state,
                char: action.payload,
                loading: false
            };
        case 'CHAR_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'CHAR_ERROR':
            return {
                ...state,
                error: true,
                loading: false
            };
        case 'TOGGLE_BTN':
            return {
                ...state,
                charVisible: !state.charVisible 
            };
        case 'CHARLIST_LOADED':
            return {
                ...state,
                charList: action.payload,
                loading: true
            };
        case 'CHARLIST_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'CHARLIST_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            };
        case 'ON_CHAR_DETAILS':
            return {
                ...state,
                charId: action.payload,
                itemLoading: true,
                itemDetailsVisible: true
            };
        case 'CHAR_DETAILS':
            return {
                ...state,
                itemDetails: action.payload,
                itemLoading: false
            };
        default:
            return state;
    }
}

export default reducer;