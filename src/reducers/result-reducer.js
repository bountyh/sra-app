import { List, Map } from 'immutable';

import {
    GET_RESULT,
} from '../actions/result-actions';
import localStorage from '../services/sra-service.localStorage';

const defaultState = Map({
    result: List(),
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case GET_RESULT:
        	localStorage.save(action.payload, 'result');
            return state.update('result', result => action.payload);
            break;

        default:
            return state;

    }
};
