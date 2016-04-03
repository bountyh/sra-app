import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../Login';
import {
    tryLogin
} from '../../actions/login-actions';

export default connect(
    state => ({
    	user: state.login.get('user')
    }),
    dispatch => bindActionCreators({
    	tryLogin
    }, dispatch)
)(Wrapped);
