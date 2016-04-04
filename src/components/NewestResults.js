import React from 'react';

import { Link } from 'react-router';
import styles from './NewestResults.pcss'
import classnames from 'classnames';

class NewestResults extends React.Component {

    render() {
        const { newest } = this.props;

        const classes = classnames(styles.root);

        return (
            <div className={classes}>
            	<ul>
                    {newest.comps.map((result, i) =>
                        <li key={i}><Link to={"/results/"+result.id}>{result.name}</Link> <p>{result.Date}</p></li>
                    )} 		
        		</ul>
            </div>
        );
    }
}

export default NewestResults;