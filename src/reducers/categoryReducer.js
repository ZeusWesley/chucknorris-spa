export const categoyReducer = (state, action) => {
    return {
        ...state,
        newValue: action.newValue
    };
};
