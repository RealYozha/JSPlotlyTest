import Plotly from 'plotly.js-dist-min';

let data = [{
    x: ['a', 'b', 'c'],
    y: [1, 2, 3],
    type: 'bar'
}];

Plotly.newPlot('PlotlyTest0', data);