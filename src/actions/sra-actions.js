import axios from 'axios';
import { List } from 'immutable';
import sraService from '../services/sra-service.localhost';

export const ADD_COMP = 'ADD_COMP';
export const ADD_RESULT = 'ADD_RESULT';
export const RECEIVE_COMPS = 'RECEIVE_COMPS';
export const ADD_USER = 'ADD_USER';
export const GET_RESULT = 'GET_RESULT';
export const SAVE_COMP = 'SAVE_COMP';

export function addComp(comp) {
    return {
        type: ADD_COMP,
        payload: comp
    };
}

export function addResult(result) {
    return function(dispatch) {
        return sraService.save(result, 'result').then(() => {
            type: ADD_RESULT
        });
    };
}

export function getResult(id) {
    return function (dispatch) {
        return sraService.getResult(id).then(result => {
            dispatch({
                type: GET_RESULT,
                payload: result
            });
        });
    };
}

export function addUser(user) {
    return function(dispatch) {
        return sraService.save(user, 'user').then(() => {
           dispatch({
                type: ADD_USER
            }); 
        });
    };
}

export function receiveComps() {
    return function(dispatch) {
        return sraService.get().then(comps => {
            dispatch({
                type: RECEIVE_COMPS,
                payload: List(comps)
            });
        });
    };
}

export function saveComp(comp) {
    return function(dispatch) {
        return sraService.save(comp, 'comp').then(() => {
            dispatch({
                type: SAVE_COMP
            });
        });
    };
}

