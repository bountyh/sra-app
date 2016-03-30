import axios from 'axios';
import { List } from 'immutable';
import sraService from '../services/sra-service.localhost';

export const GET_NEWEST = 'GET_NEWEST';

export function getNewest(amount = 5) {
    return function (dispatch) {
        return sraService.get('newest', amount).then(newest => {
            dispatch({
                type: GET_NEWEST,
                payload: newest
            });
        });
    };
}


