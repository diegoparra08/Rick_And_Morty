import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./actions"



const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            const newRemove = state.allCharacters.filter((character) =>
                character.id !== action.payload )
            return {
                ...state,
                myFavorites: newRemove,
                allCharacters: newRemove
               
            }

        case ORDER:
            let ordered;
            if (action.payload === 'Ascendente') {
                ordered = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1)
            } else {
                ordered = state.myFavorites.sort((a, b) => b.id > a.id ? 1 : -1)
            }
            return {
                ...state,
                myFavorites: [...ordered]
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((character) => character.gender === action.payload)
            }

        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;