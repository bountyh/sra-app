import React from 'react';
import { List } from 'immutable';
import ResultTable from './ResultTable';

class Result extends React.Component {
    constructor(props) {
        super(props);
        let { getResult, getCompetitors } = this.props;
        getResult(this.props.params.id);
        getCompetitors();

        this.state = {visible: 'all'};
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
                <li key={i}><button onClick={this.onClick.bind(null, i, this)}>{stage.name}</button></li>
            )

            results = result.stages.map((stage, i) =>
                <section key={i} className={'stage-'+i}>
                    <h2>{stage.name}</h2>
                    <ResultTable tableHeaders={nonCombinedHeaders} competitors={competitors} result={stage} />
                </section>
            )
        }

        return (
            <section>
                <h1>Kilpailun tulokset</h1>
                <ul className="tabs">
                    <li><button onClick={this.onClick.bind(null, 'all', this)}>Kaikki</button></li>
                    <li><button onClick={this.onClick.bind(null, 'combined', this)}>Yhdistetyt</button></li>
                    {tabs}
                </ul>
                <section className="stage-combined">
                <h2>Yhdistetyt</h2>
                    <ResultTable tableHeaders={tableHeaders} competitors={competitors} result={result.combined}/>
                </section>
                {results}
            </section>
        );
    }

    onClick(id, self) {
        self.state.visible = id;
    }
};

export default Result;