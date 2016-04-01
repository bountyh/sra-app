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
            return state.update('newest', newest => action.payload[0]);
            break;

        default:
            return state;

    }
};
