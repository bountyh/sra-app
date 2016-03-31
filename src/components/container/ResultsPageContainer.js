import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../ResultsPage';
import {
    getResults,
    getCompetitors,
    reorderResults
} from '../../actions/resultspage-actions';

export default connect(
    state => ({
    	results: state.results.get('results'),
    	competitors: state.results.get('competitors')
    }),
    dispatch => bindActionCreators({
    	getResults,
    	getCompetitors,
        reorderResults
    }, dispatch)
)(Wrapped);
