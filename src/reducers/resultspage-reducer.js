import { List, Map } from 'immutable';
import uuid from 'node-uuid';

import {
    GET_RESULTS,
    REORDER_RESULTS,
    GET_COMPETITORS,
    SEARCH_RESULTS
} from '../actions/resultspage-actions';
import localStorage from '../services/sra-service.localStorage';

const defaultState = Map({
    results: List(),
    competitors: List(),
});

// Leeched from SO
var sort_by = function(field, reverse, primer){
   var key = function (x) {return primer ? primer(x[field]) : x[field]};

   return function (a,b) {
    var A = key(a), B = key(b);
    return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];                  
   }
}

var objToArr = function(obj) {
  let tempArr = [];
  
  for (let object in obj) {
    tempArr.push(obj[object]);
  }
  return tempArr;
}

export default function(state = defaultState, action) {

    switch (action.type) {

        case GET_RESULTS:
          // use local storage for faster search results.
          localStorage.save(action.payload, 'results');
          return state.update('results', results => action.payload);
          break;

        case GET_COMPETITORS:
        	return state.update('competitors', competitors => action.payload);
        	break;

        case SEARCH_RESULTS:
          let searchResult = [];
          let storage = objToArr(action.payload.storage);

          storage.filter((obj) => {
            if (obj.name.toUpperCase().indexOf(action.payload.query.toUpperCase()) > -1) {
              searchResult.push(obj);
            }
          });

          return state.update('results', result => searchResult);
          break;

        case REORDER_RESULTS:
          let currResults = state.get('results');
          // State returns allways an object of objects, need to turn it into array.
          let tempResults = objToArr(currResults);
          let results = tempResults.sort(sort_by(action.payload.orderBy, action.payload.reverse, action.payload.primer));

        	return state.update('results', res => results);
        	break;

        default:
            return state;

    }
};
