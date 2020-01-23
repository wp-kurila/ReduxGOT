const initialState = {
    char: {},
    loading: true,
    error: false,
    charVisible: true,
    itemList: null,
    itemId: null,
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
        case 'ITEMLIST_LOADED':
            return {
                ...state,
                itemList: action.payload,
                loading: true
            };
        case 'ON_ITEM_DETAILS':
            return {
                ...state,
                itemId: action.payload,
                itemLoading: true,
                itemDetailsVisible: true
            };
        case 'ITEM_DETAILS_LOADED':
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