export const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, list: action.payload, detail: {}};
        case 'DETAIL_DATA':
            return {...state, detail: action.payload};
        case 'ERROR':
            return {...state, error: action.payload};
        default:
             return state
    }
};
