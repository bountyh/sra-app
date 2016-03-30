import React from 'react';

import NewestResults from './NewestResults';
import NewestNews from './NewestNews';

class IndexPage extends React.Component {

    render() {
        const { newest } = this.props;
        return (
            <section>
                <h1>SRA Tulos applikaatio</h1>
                <section className="promo-banner">
                </section>
                <section className="latest">
                    <h2>Viimeisimmät kilpailu tulokset</h2>
                    <NewestResults newest={newest} />
                </section>
                <section className="articles">
                    <h2>Uutiset</h2>
                    <NewestNews newest={newest} />
                </section>
            </section>
        );
    }
};

export default IndexPage;