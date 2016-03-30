import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/container/AppContainer';
import IndexPage from './components/container/IndexPageContainer';
import ResultsPage from './components/container/ResultsPageContainer';
import { getNewest } from './actions/indexpage-actions';

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

    return (
        <Router history={history}>
            <Route path="/" component={App} onEnter={initApp}>
                <IndexRoute component={IndexPage} onEnter={checkFetcher}/>
                <Route path="/results" component={ResultsPage} />
            </Route>
        </Router>
    );
}

