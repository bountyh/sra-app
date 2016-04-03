import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import ResultsPage from './components/container/ResultsPageContainer';
import Result from './components/container/ResultContainer';
import Login from './components/container/LoginContainer';
import { getNewest } from './actions/indexpage-actions';
import { getResults, getCompetitors } from './actions/resultspage-actions';
import localStorage from './services/sra-service.localStorage';

export function createRouter({ store, history }) {

    function checkFetcher(nextState, replaceState, callback) {
        if (!this.component.fetch) {
            callback();
            return;
        }
        this.component.fetch(store).then(callback);
    }

    function initApp(nextState, replaceState, callback) {
        store.dispatch(getNewest()).then(() => {
            callback();
        });
    }

    function initResults(nextState, replaceState, callback) {
        store.dispatch(getResults()).then(() => {
            store.dispatch(getCompetitors()).then(() => {
                callback();
            });
        });     
    }

    function requiresLogin(nextState, replaceState) {
        const user = store.getState().login.get('user');
        let lgn = localStorage.get('lgn');
        if (user.isAnonymous) {
            replaceState(
                {
                    'next': nextState.location.pathname,
                },
                '/login'
            );
        }
    }

    return (
        <Router history={history}>
            <Route path="/" component={App} onEnter={initApp}>
                <IndexRoute component={IndexPage} onEnter={checkFetcher}/>
                <Route path="/results" component={ResultsPage} onEnter={initResults}/>
                <Route path="/results/:id" component={Result} />
                <Route path="/login" component={Login} />
                <Route path="/admin" component={IndexPage} onEnter={requiresLogin}>
                    
                </Route>
            </Route>
        </Router>
    );
}

