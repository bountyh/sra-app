import React from 'react';

import ResultRow from './ResultRow';

class ResultsPage extends React.Component {

    render() {
    	const { results, competitors, reorderResults } = this.props;

        return (
            <section>
                <h1>Tuloksia</h1>
                <table>
                    <tbody>
                    	<tr>
                    		<th>Kilpailun nimi<button onClick={reorderResults.bind(null, 'name', false)}>Z-a</button><button onClick={reorderResults.bind(null, 'name', true)}>A-z</button></th>
                    		<th>Päivämäärä<button onClick={reorderResults.bind(null, 'Date', false)}>&uarr;</button><button onClick={reorderResults.bind(null, 'Date', true)}>&darr;</button></th>
                    		<th>Voittaja</th>
                    	</tr>
                    	{results.map((result, i) => 
                    		<ResultRow key={i} competitors={competitors} result={result} />
                    	)}
                    </tbody>
                </table>
            </section>
        );
    }
};

export default ResultsPage;