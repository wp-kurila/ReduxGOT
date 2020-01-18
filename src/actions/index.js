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

const charError = () => {
    return {
        type: 'CHAR_ERROR',
    };
};

const toggleBtn = () => {
    return {
        type: 'TOGGLE_BTN',
    };
};

export {
    charLoaded,
    charRequested,
    charError,
    toggleBtn
}
