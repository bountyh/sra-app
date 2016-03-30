import React from 'react';

import { Link } from 'react-router';

class NewestResults extends React.Component {

    render() {
        const { newest } = this.props;

        return (
            <div>
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