
export const ADD_FAV = 'ADD_FAV';   //ACTION TYPES: SE PUEDEN HACER EN UN ARCHIVO APARTE Y SE EXPORTAN A ACTIONS
export const REMOVE_FAV = 'REMOVE_FAV';

//import {ADD_FAV, REMOVE_FAV} from './actionType'  se puede importar asi


export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character,
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}
