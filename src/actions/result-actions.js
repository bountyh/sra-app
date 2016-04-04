import axios from 'axios';
import { List } from 'immutable';
import sraService from '../services/sra-service.localhost';

export const GET_RESULT = 'GET_RESULT';

export function getResult(id) {
    return function (dispatch) {
        return sraService.get('result', id).then(result => {
            dispatch({
                type: GET_RESULT,
                payload: result[0]
            });
        });
    };
}
