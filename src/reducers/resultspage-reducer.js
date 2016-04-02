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
   var key = function (x) {return primer ? primer(x[field]) : x[field]};

   return function (a,b) {
    var A = key(a), B = key(b);
    return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];                  
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
          // Not shure if this is the best approach..
          let tempResults = [];
          let currResults = state.get('results');
          for (let result in currResults) {
            tempResults.push(currResults[result]);
          }
          
          let results = tempResults.sort(sort_by(action.payload.orderBy, action.payload.reverse, action.payload.primer));

        	return state.update('results', res => results);
        	break;

        default:
            return state;

    }
};
