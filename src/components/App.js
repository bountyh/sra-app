import React from 'react';

import styles from './App.pcss';
import Navbar from './Navbar';

export default class App extends React.Component {

    render() {
    	let containerStyles = {
    		padding: '0 50px'
    	};

        return (
            <div className={styles.root}>
                <Navbar />
                <section style={containerStyles}>
                	{this.props.children}
                </section>
            </div>
        );
    }
}
