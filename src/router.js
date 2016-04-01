import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import ResultsPage from './components/container/ResultsPageContainer';
import Result from './components/container/ResultContainer';
import { getNewest } from './actions/indexpage-actions';
import { getResults, getCompetitors } from './actions/resultspage-actions';

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

    return (
        <Router history={history}>
            <Route path="/" component={App} onEnter={initApp}>
                <IndexRoute component={IndexPage} onEnter={checkFetcher}/>
                <Route path="/results" component={ResultsPage} onEnter={initResults}/>
                <Route path="/results/:id" component={Result} />
            </Route>
        </Router>
    );
}

