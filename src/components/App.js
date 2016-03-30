import React from 'react';

import styles from './App.pcss';
import Navbar from './Navbar';

export default class App extends React.Component {

    render() {

        return (
            <div className={styles.root}>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}
