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
            "Kilpailija",
            "Aika",
            "Sijoitus",
            "Kokonaispisteet",
            "Osumakerroin",
            "Rastipisteet",
            "Rasti %",
            "Luokka",
        );

        let results,
            tabs;
        if (typeof result.stages != 'undefined') {
            tabs = result.stages.map((stage, i) => 
                <li key={i}>{stage.name}</li>
            )

            results = result.stages.map((stage, i) =>
                <section key={i}>
                    <h2>{stage.name}</h2>
                    <ResultTable tableHeaders={nonCombinedHeaders} result={stage} />
                </section>
            )
        }

        return (
            <section>
                <h1>Kilpailun tulokset</h1>
                <ul className="tabs">
                    <li>Yhdistetyt</li>
                    {tabs}
                </ul>
                <h2>Yhdistetyt</h2>
                <ResultTable tableHeaders={tableHeaders} result={result.combined}/>
                {results}
            </section>
        );
    }
};

export default Result;