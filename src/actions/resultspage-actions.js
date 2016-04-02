import axios from 'axios';
import { List } from 'immutable';
import sraService from '../services/sra-service.localhost';

export const GET_RESULTS = 'GET_RESULTS';
export const GET_RESULT = 'GET_RESULT';
export const GET_COMPETITORS = 'GET_COMPETITORS';
export const REORDER_RESULTS = 'REORDER_RESULTS';

export function reorderResults(orderBy, reverse = false) {
	let primer;
	switch (orderBy) {
		case 'Date':
			primer = function(a) {
				let parts = a.split('.');
				return new Date(parts[2], parts[1], parts[0]);
			}
		break;

		default:
			primer = function(a) {
				return a.toUpperCase();
			}
		break;
	}

	return {
		type: REORDER_RESULTS,
		payload: {
			orderBy: orderBy,
			reverse: reverse,
			primer: primer
		}
	};
}

export function getResults() {
    return function (dispatch) {
        return sraService.get('results', 0).then(results => {
            dispatch({
                type: GET_RESULTS,
                payload: results
            });
        });
    };
}

export function getCompetitors() {
	return function (dispatch) {
		return sraService.get('competitors', 0).then(competitors => {
			dispatch({
				type: GET_COMPETITORS,
				payload: competitors
			})
		});
	};
}

export function getResult(id) {
	return function(dispatch) {
		return sraService.get('result', id).then(result => {
			dispatch({
				type: GET_RESULT,
				payload: result
			});
		});
	}
}

