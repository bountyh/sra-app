import React from 'react';
import { List } from 'immutable';
import ResultTable from './ResultTable';

class Result extends React.Component {
    constructor(props) {
        super(props);
        let { getResult, getCompetitors } = this.props;
        getResult(this.props.params.id);
        getCompetitors();
    }

    render() {
        let { result, competitors } = this.props;
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
                    <ResultTable tableHeaders={nonCombinedHeaders} competitors={competitors} result={stage} />
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
                <ResultTable tableHeaders={tableHeaders} competitors={competitors} result={result.combined}/>
                {results}
            </section>
        );
    }
};

export default Result;