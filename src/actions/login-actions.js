import axios from 'axios';
import { List } from 'immutable';
import sraService from '../services/sra-service.localhost';
import localStorage from '../services/sra-service.localStorage';

export const TRY_LOGIN = 'TRY_LOGIN';

export function tryLogin(user, pass) {
    return function (dispatch) {
    	let login = user+":"+pass;
    	localStorage.save(login, 'lgn'); // will be replaced by an actual token when backend is done.
        return sraService.post('login', login).then(response => {
            dispatch({
                type: TRY_LOGIN,
                payload: response
            });
        });
    };
}


