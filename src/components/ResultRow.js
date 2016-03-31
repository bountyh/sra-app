import React from 'react';

import { Link } from 'react-router';

class ResultsRow extends React.Component {

    render() {
    	const { result, competitors } = this.props;

    	let winner = competitors.find(competitor => competitor.id === result.winner);

        return (
    		<tr>
        		<td><Link to={'/results/'+result.id}>{result.name}</Link></td>
        		<td>{result.Date}</td>
        		<td>{winner.name}</td>
    		</tr>

        );
    }
};

export default ResultsRow;