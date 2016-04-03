import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    TRY_LOGIN
} from '../actions/login-actions';

const defaultState = Map({
    user: {
        isAnonymous: true,
        name: null,
        uid: 0,
    },
    isChanged: false
});

export default function(state = defaultState, action) {

    switch (action.type) {

        case TRY_LOGIN:
            if (action.payload.status == 200) {
                let details = {isAnonymous: false, name: action.payload.data[0].name, uid: action.payload.data[0].uid};
                return state.update('user', user => details);
            }
            break;

        default:
            return state;

    }
};
