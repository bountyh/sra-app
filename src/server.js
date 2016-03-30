import uuid from 'node-uuid';
import { List } from 'immutable';

import { createServer } from './util/server';
import config from '../config.server';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';

createServer(config, webpackConfig, (app) => {

    app.use(bodyParser.json());

    let newest = List.of(
    {
        "comps": [
            {
                "id": 1,
                "name": "SM Pohjois-karjala",
                "Date": "08.03.2015",
                "Partipicants": [1, 10, 50],
                "winner": 10
             },
             {
                "id": 2,
                "name": "VaRES loppi",
                "Date": "03.12.2015",
                "Partipicants": [1, 10, 50],
                "winner": null
            },
            {
                "id": 3,
                "name": "Stadin Sissit kesäkisa",
                "Date": "05.09.2015",
                "Partipicants": [1, 10, 50],
                "winner": null
            },
            {
                "id": 4,
                "name": "KirkRES Upinniemi",
                "Date": "01.10.2015",
                "Partipicants": [1, 10, 50],
                "winner": null
            },
            {
                "id": 5,
                "name": "Hot Steel Heinola",
                "Date": "29.04.2015",
                "Partipicants": [1, 10, 50],
                "winner": null
            }
        ],

        "news": [
            {
                "id": 1,
                "title": "Ammunnan suosio kasvussa",
                "body": "Vivamus lobortis, massa ac elementum cursus, diam neque blandit quam, vitae mattis libero tortor sit amet quam. Donec at hendrerit turpis. Pellentesque ornare risus tortor, eu blandit risus blandit in. Quisque at quam ut dui hendrerit blandit. Phasellus venenatis sem ac nisl iaculis, sed pulvinar quam feugiat. Pellentesque vitae nisl libero. Phasellus aliquam tellus ac pharetra posuere. Integer ultrices elit ut tempor finibus. Integer sapien arcu, ornare in porttitor dictum, rhoncus id nulla. Nulla gravida magna id turpis elementum, ac mollis enim tempus. Etiam condimentum imperdiet risus sed vestibulum. Proin id nibh purus. Nunc ac aliquam ex. Duis vestibulum pellentesque arcu a bibendum. Quisque laoreet eros ligula, at porttitor justo tempor non."
            },
            {
                "id": 2,
                "title": "Jussi Suomalainen voitti SM kilpailun",
                "body": "Vivamus lobortis, massa ac elementum cursus, diam neque blandit quam, vitae mattis libero tortor sit amet quam. Donec at hendrerit turpis. Pellentesque ornare risus tortor, eu blandit risus blandit in. Quisque at quam ut dui hendrerit blandit. Phasellus venenatis sem ac nisl iaculis, sed pulvinar quam feugiat. Pellentesque vitae nisl libero. Phasellus aliquam tellus ac pharetra posuere. Integer ultrices elit ut tempor finibus. Integer sapien arcu, ornare in porttitor dictum, rhoncus id nulla. Nulla gravida magna id turpis elementum, ac mollis enim tempus. Etiam condimentum imperdiet risus sed vestibulum. Proin id nibh purus. Nunc ac aliquam ex. Duis vestibulum pellentesque arcu a bibendum. Quisque laoreet eros ligula, at porttitor justo tempor non."
            },
            {
                "id": 3,
                "title": "Uusi seura perustettu Iisalmella.",
                "body": "Vivamus lobortis, massa ac elementum cursus, diam neque blandit quam, vitae mattis libero tortor sit amet quam. Donec at hendrerit turpis. Pellentesque ornare risus tortor, eu blandit risus blandit in. Quisque at quam ut dui hendrerit blandit. Phasellus venenatis sem ac nisl iaculis, sed pulvinar quam feugiat. Pellentesque vitae nisl libero. Phasellus aliquam tellus ac pharetra posuere. Integer ultrices elit ut tempor finibus. Integer sapien arcu, ornare in porttitor dictum, rhoncus id nulla. Nulla gravida magna id turpis elementum, ac mollis enim tempus. Etiam condimentum imperdiet risus sed vestibulum. Proin id nibh purus. Nunc ac aliquam ex. Duis vestibulum pellentesque arcu a bibendum. Quisque laoreet eros ligula, at porttitor justo tempor non."
            },
            {
                "id": 4,
                "title": "Suomalaiset ulkomailla kilpailemassa.",
                "body": "Vivamus lobortis, massa ac elementum cursus, diam neque blandit quam, vitae mattis libero tortor sit amet quam. Donec at hendrerit turpis. Pellentesque ornare risus tortor, eu blandit risus blandit in. Quisque at quam ut dui hendrerit blandit. Phasellus venenatis sem ac nisl iaculis, sed pulvinar quam feugiat. Pellentesque vitae nisl libero. Phasellus aliquam tellus ac pharetra posuere. Integer ultrices elit ut tempor finibus. Integer sapien arcu, ornare in porttitor dictum, rhoncus id nulla. Nulla gravida magna id turpis elementum, ac mollis enim tempus. Etiam condimentum imperdiet risus sed vestibulum. Proin id nibh purus. Nunc ac aliquam ex. Duis vestibulum pellentesque arcu a bibendum. Quisque laoreet eros ligula, at porttitor justo tempor non."
            },
            {
                "id": 5,
                "title": "Ennätys määrä uusia harrastajia aloittanut tänä vuonna.",
                "body": "Vivamus lobortis, massa ac elementum cursus, diam neque blandit quam, vitae mattis libero tortor sit amet quam. Donec at hendrerit turpis. Pellentesque ornare risus tortor, eu blandit risus blandit in. Quisque at quam ut dui hendrerit blandit. Phasellus venenatis sem ac nisl iaculis, sed pulvinar quam feugiat. Pellentesque vitae nisl libero. Phasellus aliquam tellus ac pharetra posuere. Integer ultrices elit ut tempor finibus. Integer sapien arcu, ornare in porttitor dictum, rhoncus id nulla. Nulla gravida magna id turpis elementum, ac mollis enim tempus. Etiam condimentum imperdiet risus sed vestibulum. Proin id nibh purus. Nunc ac aliquam ex. Duis vestibulum pellentesque arcu a bibendum. Quisque laoreet eros ligula, at porttitor justo tempor non."
            }
        ]
    }
    ); 

    app.get('/api/newest*', function(req, res, next) {

        setTimeout(
            function() {
                res.send(newest.toJS());
            },
            Math.random() * 300
        );
    });

    app.post('/api/todo', function(req, res, next) {
        todos = List(req.body);
        res.send(['ok']);
    });


});

