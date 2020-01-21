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

const charListLoaded = (charList) => {
    return {
        type: 'CHARLIST_LOADED',
        payload: charList
    };
};

const onCharDetails = (id) => {
    return {
        type: 'ON_CHAR_DETAILS',
        payload: id
    }
}

const charDetails = (item) => {
    return {
        type: 'CHAR_DETAILS',
        payload: item
    }
}


export {
    charLoaded,
    charRequested,
    charErrored,
    toggleBtn,
    charListLoaded,
    onCharDetails,
    charDetails,
}
