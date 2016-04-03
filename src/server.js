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

    let results = List.of(
        {
            "id": 1,
            "name": "SM Pohjois-karjala",
            "Date": "08.01.2015",
            "Partipicants": [1, 10, 50,25],
            "winner": 10
         },
         {
            "id": 2,
            "name": "VaRES loppi",
            "Date": "22.01.2015",
            "Partipicants": [1, 10, 50,25],
            "winner": 10
        },
        {
            "id": 3,
            "name": "Stadin Sissit kesäkisa",
            "Date": "05.02.2015",
            "Partipicants": [1, 10, 50,25],
            "winner": 50
        },
        {
            "id": 4,
            "name": "KirkRES Upinniemi",
            "Date": "01.03.2015",
            "Partipicants": [1, 10, 50,25],
            "winner": 1
        },
        {
            "id": 5,
            "name": "Hot Steel Heinola",
            "Date": "21.04.2015",
            "Partipicants": [1, 10, 50,25],
            "winner": 25
        },
        {
            "id": 6,
            "name": "Pikijärventie Karsinta",
            "Date": "29.10.2015",
            "Partipicants": [1, 10, 50,25],
            "winner": 25
        }
    );

    let fullResults = List.of(
        {
            "compid": 6,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        },
        {
            "compid": 1,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        },
        {
            "compid": 2,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        },
        {
            "compid": 3,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        },
        {
            "compid": 4,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        },
        {
            "compid": 5,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        },
        {
            "compid": 6,
            "combined": {
                "results": [
                    {
                        "rating": 1,
                        "percent": 100,
                        "pointsFinal": 112,
                        "user": 1,
                        "class": "Avo"
                    },
                    {
                        "rating": 2,
                        "percent": 96.44,
                        "pointsFinal": 102,
                        "user": 10,
                        "class": "Avo"
                        
                    },
                    {
                        "rating": 3,
                        "percent": 85.44,
                        "pointsFinal": 84,
                        "user": 25,
                        "class": "Avo"
                    },
                    {
                        "rating": 4,
                        "percent": 96.44,
                        "pointsFinal": 81,
                        "user": 50,
                    },
                ]
            },
            "stages": [
                {
                    "stage": 1,
                    "name": "Monttu1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 2,
                    "name": "Kivääri 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                },
                {
                    "stage": 3,
                    "name": "Pistooli 1",
                    "results": [
                        {
                            "user": 1,
                            "time": 10.24,
                            "rating": 1,
                            "pointsFinal": 112,
                            "hitRate": 5.6,
                            "points": 130,
                            "percent": 100
                        },
                        {
                            "user": 10,
                            "time": 10.94,
                            "rating": 2,
                            "pointsFinal": 102,
                            "hitRate": 5.4,
                            "points": 120,
                            "percent": 96.44
                        },
                        {
                            "user": 25,
                            "time": 11.94,
                            "rating": 3,
                            "pointsFinal": 84,
                            "hitRate": 5.12,
                            "points": 89,
                            "percent": 85.44
                        },
                        {
                            "user": 50,
                            "time": 13.04,
                            "rating": 4,
                            "pointsFinal": 81,
                            "hitRate": 4.3,
                            "points": 84,
                            "percent": 96.44
                        },
                    ]
                }
            ]
        }
    );

    let competitors = List.of(
        {
            "id": 1,
            "name": 'Petri Parkkonen'
        },
        {
            "id": 10,
            "name": 'Sami Jääskeläinen'
        },
        {
            "id": 25,
            "name": 'Matti Meikäläinen'
        },
        {
            "id": 50,
            "name": 'Keijjo Kekäläinen'
        }
    );

    app.get('/api/competitors*', function(req, res, next) {

        setTimeout(
            function() {
                res.send(competitors.toJS());
            },
            Math.random() * 300
        );
    });

    app.get('/api/newest*', function(req, res, next) {

        setTimeout(
            function() {
                res.send(newest.toJS());
            },
            Math.random() * 300
        );
    });

    app.get('/api/results*', function(req, res, next) {
        setTimeout(
            function() {
                res.send(results.toJS());
            },
            Math.random() * 300
        );
    });

    app.get('/api/result/:id', function(req,res, next) {
        let id = req.params.id;
        let result = fullResults.filter(result => result.compid == id);

        setTimeout(
            function() {
                res.send(result.toJS());
            },
            Math.random() * 300
        ); 
   });

    app.post('/api/login', function(req, res, next) {
        
        res.send(List.of({"uid": 1, "name": "b0untyhh"}).toJS());
    });


});

