const initialState = false;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "open":
            document
                .getElementsByTagName("body")[0]
                .classList.toggle("hidden-scroll");
            return true;
        case "close":
            document
                .getElementsByTagName("body")[0]
                .classList.toggle("hidden-scroll");
            return false;
        default:
            return state;
    }
};

export default reducer;
