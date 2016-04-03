import React from 'react';

import { Link } from 'react-router';

class ResultTable extends React.Component {
    render() {
    	let { tableHeaders, result, competitors } = this.props;
        
    	let rows; 
    	if (typeof result != 'undefined') {
    		rows = result.results.
    		map((row, i) => 
            	<tr key={i}>
            		{Object.keys(row).map((field, i) =>
                        <td>
                            {(() => {
                                if (field != 'user') {
                                    return row[field];
                                }
                                else {
                                    return competitors.find(competitor => competitor.id === row.user).name
                                }
                            })()}
                        </td>
        			)}
            	</tr>
        	)
    	}

        return (
            <table>
	            <tbody>
	                <tr>
	                    {tableHeaders.map((header, i) => 
	                        <th key={i}>{header}</th>
	                    )}
	                </tr>
	               	{rows}
	            </tbody>
	        </table>
        );
    }
}

export default ResultTable;