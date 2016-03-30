import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    GET_NEWEST
} from '../actions/indexpage-actions';

const defaultState = Map({
    newest: List(),
    isChanged: false
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case GET_NEWEST:
            return state.update('newest', newest => action.payload[0]);
            break;

        default:
            return state;

    }
};
