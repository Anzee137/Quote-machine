import { getQuotesAPI } from "./../api/api";

const SET_QUOTE = "SET_QUOTE";
const SET_CURRENT_COLOR = "SET_CURRENT_COLOR";
const SET_CURRENT_QUOTE = "SET_CURRENT_QUOTE";

let initialState = {
    colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ],
    quotes: [],
    currentColor: null,
    currentQuote: null,

};

function quoteReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_QUOTE:
            return {
                ...state,
                currentQuote: action.quote,
            }
        case SET_CURRENT_COLOR:
            return {
                ...state,
                currentColor: action.color,
            }
        case SET_QUOTE:
            return {
                ...state,
                quotes: action.quotes,
            }
        default:
            return { ...state }
    }
}

let setQuotes = (quotes) => {
    return { type: SET_QUOTE, quotes }
}


export let getQuotes = () => {
    return async (dispatch) => {
        let response = await getQuotesAPI();
        dispatch(setQuotes(response.data.quotes));
    }
}

export let setCurrentColor = (color) => {
    return { type: SET_CURRENT_COLOR, color }
}

export let setCurrentQuote = (quote) => {
    return { type: SET_CURRENT_QUOTE, quote }
}

export default quoteReducer;