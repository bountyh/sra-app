import React from 'react';

import NewestResults from './NewestResults';
import NewestNews from './NewestNews';
import styles from './IndexPage.pcss';
import classnames from 'classnames';

class IndexPage extends React.Component {

    render() {
        const classes = classnames(styles.root);
        const { newest } = this.props;
        let img = require('../images/hero-bg.jpg');
        let stylesBackground = {
            backgroundImage: 'url('+img+')',
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }

        return (
            <section className={classes}>
                <div style={stylesBackground} className="promo-banner">
                </div>
                <section className="articles">
                    <h2>Uutiset</h2>
                    <NewestNews newest={newest} />
                </section>
                <section className="latest">
                    <h2>Viimeisimmät kilpailu tulokset</h2>
                    <NewestResults newest={newest} />
                </section>
            </section>
        );
    }
};

export default IndexPage;