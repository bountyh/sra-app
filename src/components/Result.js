import React from 'react';
import { List } from 'immutable';
import ResultTable from './ResultTable';

class Result extends React.Component {
    constructor(props) {
        super(props);
        let { getResult } = this.props;
        getResult(this.props.params.id);
    }

    render() {
        let { result } = this.props;
        let tableHeaders = List.of(
            "Sijoitus",
            "Kilpailu %",
            "Kokonaispisteet",
            "Kilpailija",
            "Luokka",
        );

        let nonCombinedHeaders = List.of(
            "Sijoitus",
            "Kokonaispisteet",
            "Aika",
            "Osumakerroin",
            "Rastipisteet",
            "Rasti %",
            "Kilpailija",
            "Luokka",
        );

        return (
            <section>
                <h1>Kilpailun tulokset</h1>
                <ul className="tabs">
                    <li>Yhdistetyt</li>
                </ul>
                <h2>Yhdistetyt</h2>
                <ResultTable tableHeaders={tableHeaders} result={result.combined}/>
            </section>
        );
    }
};

export default Result;