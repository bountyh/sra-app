import React from 'react';

import styles from './App.pcss';
import LoginForm from './LoginForm';


class Login extends React.Component {
    render() {
    	let { tryLogin } = this.props;
        return (
            <div>
                <LoginForm tryLogin={tryLogin} />
            </div>
        );
    }
}
export default Login;
