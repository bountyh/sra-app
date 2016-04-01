import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    GET_RESULT
} from '../actions/result-actions';

const defaultState = Map({
    result: List(),
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case GET_RESULT:
            return state.update('result', result => action.payload);
            break;

        default:
            return state;

    }
};
