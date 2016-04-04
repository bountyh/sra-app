import React from 'react';

import Login from './container/LoginContainer';
import styles from './NavBar.pcss';
import { Link } from 'react-router';
import classnames from 'classnames';

class NavBar extends React.Component {

    render() {

        const classes = classnames(styles.root);

        const liClasses = classnames(styles.li);

        return (
            <div>
                <div className={classes}>
                    <div className="logo-wrapper">
                        <Link to="/"><img src={require('../images/resul_logo.png')} /></Link>
                        <span>RESERVILÄISURHEILULIITTO <sup>RY</sup></span>
                        <h1>SRA tulospalvelu</h1>
                    </div>
                    <section>
                        <Login />
                        <Link to="/">Unohtuiko salasana?</Link><span>|</span>
                        <Link to="/">Rekisteröidy</Link>
                    </section>
                	
                </div>
                <ul className={liClasses}>
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/results">Tulokset</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;