const charLoaded = (char) => {
    return {
        type: 'CHAR_LOADED',
        payload: char
    };
};

const charRequested = () => {
    return {
        type: 'CHAR_REQUESTED',
    };
};

const charErrored = () => {
    return {
        type: 'CHAR_ERROR',
    };
};

const toggleBtn = () => {
    return {
        type: 'TOGGLE_BTN',
    };
};

const charListLoaded = (itemList) => {
    return {
        type: 'CHARLIST_LOADED',
        payload: itemList
    };
};

const bookListLoaded = (itemList) => {
    return {
        type: 'BOOKLIST_LOADED',
        payload: itemList
    };
};

const houseListLoaded = (itemList) => {
    return {
        type: 'HOUSELIST_LOADED',
        payload: itemList
    };
};

const onCharDetails = (id) => {
    return {
        type: 'ON_CHAR_DETAILS',
        payload: id
    }
}

const onBookDetails = (id) => {
    return {
        type: 'ON_BOOK_DETAILS',
        payload: id
    }
}

const onHouseDetails = (id) => {
    return {
        type: 'ON_HOUSE_DETAILS',
        payload: id
    }
}

const charDetailsLoaded = (item) => {
    return {
        type: 'CHAR_DETAILS_LOADED',
        payload: item
    }
}

const bookDetailsLoaded = (item) => {
    return {
        type: 'BOOK_DETAILS_LOADED',
        payload: item
    }
}

const houseDetailsLoaded = (item) => {
    return {
        type: 'HOUSE_DETAILS_LOADED',
        payload: item
    }
}


export {
    charLoaded,
    charRequested,
    charErrored,
    toggleBtn,
    charListLoaded,
    bookListLoaded,
    houseListLoaded,
    onCharDetails,
    onBookDetails,
    onHouseDetails,
    charDetailsLoaded,
    bookDetailsLoaded,
    houseDetailsLoaded
}
