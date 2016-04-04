import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../Result';
import {
    getResult,
    setActiveRow,
} from '../../actions/result-actions';
import { getCompetitors } from '../../actions/resultspage-actions';

export default connect(
    state => ({
    	result: state.result.get('result'),
    	competitors: state.results.get('competitors')
    }),
    dispatch => bindActionCreators({
    	getResult,
    	setActiveRow,
    	getCompetitors,
    }, dispatch)
)(Wrapped);
