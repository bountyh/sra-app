import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Wrapped from '../IndexPage';
import {
    getNewest
} from '../../actions/indexpage-actions';

export default connect(
    state => ({
        newest: state.indexpage.get('newest')
    }),
    dispatch => bindActionCreators({
        getNewest
    }, dispatch)
)(Wrapped);