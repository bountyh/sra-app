import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    GET_RESULTS,
    REORDER_RESULTS,
    GET_COMPETITORS
} from '../actions/resultspage-actions';

const defaultState = Map({
    results: List(),
    competitors: List()
});

var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}

export default function(state = defaultState, action) {

    switch (action.type) {

        case GET_RESULTS:
            return state.update('results', results => action.payload);
            break;

        case GET_COMPETITORS:
        	return state.update('competitors', competitors => action.payload);
        	break;

        case REORDER_RESULTS:
        	return state.update('results', results => results.sort(sort_by(action.payload.orderBy, action.payload.reverse, action.payload.primer)))
        	break;

        default:
            return state;

    }
};
