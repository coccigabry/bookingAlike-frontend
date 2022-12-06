import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    city: undefined,
    date: [],
    options: {
        adults: undefined,
        childrens: undefined,
        rooms: undefined
    }
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {

    switch (action.type) {

        case "NEW_SEARCH":
            return action.payload;

        case "RESET_SEARCH":
            return INITIAL_STATE;

        default: 
            return state;

    }

};

export default function SearchContextProvider({ children }) {

    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider 
            value={ { city: state.city, date: state.date, options: state.options, dispatch } }
        >
            { children }
        </SearchContext.Provider>
    )

};

