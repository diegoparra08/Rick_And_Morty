import axios from 'axios';
export const ADD_FAV = 'ADD_FAV';   //ACTION TYPES: SE PUEDEN HACER EN UN ARCHIVO APARTE Y SE EXPORTAN A ACTIONS
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET'

//import {ADD_FAV, REMOVE_FAV} from './actionType'  se puede importar asi


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        } catch (error) {
            return {error: error.message}
            // alert('Error adding to Favorites')
        };
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            return {error: error.message}
            // alert('Error deleting from Favorites')
        };
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
    }
}

export const resetFavs = () => {
    return {
        type: RESET,
    }
}