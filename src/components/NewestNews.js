import React from 'react';

import { Link } from 'react-router';

class NewestNews extends React.Component {

    render() {
        const { newest } = this.props;

        return (
            <div>
                {newest.news.map((news, i) =>
                    <article key={i}>
                        <h3>{news.title}</h3>
                        <p>{news.body.substring(0,255)}...</p>
                        <Link className="read-more" to={"/news/"+news.id}>Lue Lisää</Link>
                    </article>
                )}
            </div>
        );
    }
}

export default NewestNews;