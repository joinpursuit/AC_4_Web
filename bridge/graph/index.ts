import {DataSet, Network} from 'vis'

const nodes = new DataSet([
    {id: 1, label: 'values'},
    {id: 2, label: 'expressions'},
    {id: 3, label: 'variables'},
    {id: 4, label: 'operators'},
    {id: 5, label: 'assignment operator'}
]);

// create an array with edges
const edges = new DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2, arrows:'to'},
    {from: 2, to: 4},
    {from: 2, to: 5}
]); 

// create a network
const container = document.getElementById('network');

// provide the data in the vis format
const data = {
    nodes: nodes,
    edges: edges
};

const options = {};

// initialize your network!
const network = new Network(container, data, options);