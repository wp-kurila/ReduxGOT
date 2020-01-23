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

const itemListLoaded = (itemList) => {
    return {
        type: 'ITEMLIST_LOADED',
        payload: itemList
    };
};

const onItemDetails = (id) => {
    return {
        type: 'ON_ITEM_DETAILS',
        payload: id
    }
}

const itemDetailsLoaded = (item) => {
    return {
        type: 'ITEM_DETAILS_LOADED',
        payload: item
    }
}


export {
    charLoaded,
    charRequested,
    charErrored,
    toggleBtn,
    itemListLoaded,
    onItemDetails,
    itemDetailsLoaded,
}
