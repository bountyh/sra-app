import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../ResultsPage';
import {
    getResults
} from '../../actions/resultspage-actions';

export default connect(
    state => ({
    	results: state.results.get('results')
    }),
    dispatch => bindActionCreators({
    	getResults
    }, dispatch)
)(Wrapped);
