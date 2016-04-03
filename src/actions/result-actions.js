import axios from 'axios';
import { List } from 'immutable';
import sraService from '../services/sra-service.localhost';
import localStorage from '../services/sra-service.localStorage';

export const GET_RESULT = 'GET_RESULT';
export const FILTER_RESULT = 'FILTER_RESULT';

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

export function filterResult(key) {
	let result = localStorage.get('result');
	return {
		type: FILTER_RESULT,
		payload: {
			key: key,
			result: result
		}
	}
}


