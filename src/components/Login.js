import React from 'react';

import styles from './Login.pcss';
import LoginForm from './LoginForm';
import classnames from 'classnames';


class Login extends React.Component {
    render() {
    	const classes = classnames(
            styles.root
        );

    	let { tryLogin } = this.props;
        return (
            <div className={classes}>
                <LoginForm tryLogin={tryLogin} />
            </div>
        );
    }
}
export default Login;
