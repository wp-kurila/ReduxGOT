const initialState = {
    char: {},
    loading: true,
    error: false,
    charVisible: true,
    charList: null,
    charListError: false,
    bookList: null,
    bookListError: false,
    houseList: null,
    houseListError: false,
    charId: null,
    bookId: null,
    houseId: null,
    charDetails: null,
    charDetailsVisible: false,
    charLoading: true,
    bookDetails: null,
    bookDetailsVisible: false,
    bookLoading: true,
    houseDetails: null,
    houseDetailsVisible: false,
    houseLoading: true
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
        case 'CHARLIST_ERROR':
            return {
                ...state,
                charListError: true
            };
        case 'BOOKLIST_LOADED':
            return {
                ...state,
                bookList: action.payload,
                loading: true
            };
        case 'BOOKLIST_ERROR':
            return {
                ...state,
                bookListError: true
            };
        case 'HOUSELIST_LOADED':
            return {
                ...state,
                houseList: action.payload,
                loading: true
            };
        case 'HOUSELIST_ERROR':
            return {
                ...state,
                houseListError: true
            };
        case 'ON_CHAR_DETAILS':
            return {
                ...state,
                charId: action.payload,
                charLoading: true,
                charDetailsVisible: true
            };
        case 'ON_BOOK_DETAILS':
            return {
                ...state,
                bookId: action.payload,
                bookLoading: true,
                bookDetailsVisible: true
            };
        case 'ON_HOUSE_DETAILS':
            return {
                ...state,
                houseId: action.payload,
                houseLoading: true,
                houseDetailsVisible: true
            };
        case 'CHAR_DETAILS_LOADED':
            return {
                ...state,
                charDetails: action.payload,
                charLoading: false
            };
        case 'BOOK_DETAILS_LOADED':
            return {
                ...state,
                bookDetails: action.payload,
                bookLoading: false
            };
        case 'HOUSE_DETAILS_LOADED':
            return {
                ...state,
                houseDetails: action.payload,
                houseLoading: false
            };
        default:
            return state;
    }
}

export default reducer;