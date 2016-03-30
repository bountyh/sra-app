import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    GET_RESULTS
} from '../actions/resultspage-actions';

const defaultState = Map({
    results: List(),
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case GET_RESULTS:
            return state.update('results', results => action.payload);
            break;

        default:
            return state;

    }
};
