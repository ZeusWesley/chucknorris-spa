import fetch from 'cross-fetch';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const GET_DETAIL = 'GET_DETAIL';

export function loadCategories(e) {
    return {
        type: LOAD_CATEGORIES,
        payload: e.target
    }
}

export function receiveCategories(e) {
    return {
        type: LOAD_CATEGORIES,
        payload: e.target.value
    }
}

export function fetchCategories() {
    return dispatch => {
        let request = fetch('https://api.chucknorris.io/jokes/categories').then(response => {});
        return loadCategories(request);
    }
}

function getDetail() {
    return dispatch => {

    }
}
