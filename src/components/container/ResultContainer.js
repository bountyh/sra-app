import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../Result';
import {
    getResult
} from '../../actions/result-actions';

export default connect(
    state => ({
    	result: state.result.get('result'),
    }),
    dispatch => bindActionCreators({
    	getResult
    }, dispatch)
)(Wrapped);
