import fetch from 'cross-fetch';

export const FETCH_DATA = 'FETCH_DATA';
export const DETAIL_DATA = 'DETAIL_DATA';
export const ERROR = 'ERROR';

function fetchData(data) {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

function detailData(data) {
    return {
        type: DETAIL_DATA,
        payload: data
    }
}

function error(data) {
    return {
        type: ERROR,
        payload: data
    }
}


export function fetchCategories() {
    return dispatch => {
        fetch('https://api.chucknorris.io/jokes/categories').then(response => response.json()).then(
            json => dispatch(fetchData(json))
        ).catch((response) => {
            dispatch(error(response))
        });
    }
}

export function getDetail(category) {
    return dispatch => {
        fetch('https://api.chucknorris.io/jokes/random?category=' + category).then(response => response.json()).then(
            json => dispatch(detailData(json))
        ).catch((response) => {
            dispatch(error(response))
        });
    }
}
