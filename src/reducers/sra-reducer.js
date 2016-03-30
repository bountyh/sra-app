import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    ADD_USER,
    ADD_RESULT,
    RECEIVE_COMPS,
    SAVE_COMP,
    GET_RESULT,
    ADD_COMP
} from '../actions/sra-actions';

const defaultState = Map({
    todos: List(),
    isChanged: false
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case RECEIVE_COMPS:
            return state.update('comps', comps => comps.concat(action.payload));
            break;

        case GET_RESULT:
            return state.update('result', result => result.concat(action.payload));
            break;
            
        case ADD_USER:
            return state.set('isChanged', false);

        case ADD_COMP:
            return state.set('isChanged', false);

        case ADD_RESULT:
            return state.set('isChanged', false);

        case SAVE_COMP:
            return state.set('isChanged', false);

        default:
            return state;

    }
};
