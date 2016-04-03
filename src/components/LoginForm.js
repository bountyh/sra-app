import React from 'react';

import styles from './App.pcss';

class LoginForm extends React.Component {
    render() {
    	let { tryLogin } = this.props;

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
            	<input type="text" ref="user" placeholder="Käyttäjänimi" />
            	<input type="password" ref="pass" placeholder="Password" />
            	<input type="submit" value="Kirjaudu" />
            </form>
        );
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.tryLogin(this.refs.user, this.refs.pass);
    }
}
export default LoginForm;