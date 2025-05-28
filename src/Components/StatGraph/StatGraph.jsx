import './StatGraph.css';

import * as d3 from 'd3';
import { useEffect } from 'react';

import { useStats } from '../../Contexts/StatsContext';

function StatGraph() {
    const {exercises} = useStats();

    useEffect(() => {
        let margin = { top: 20, right: 30, bottom: 30, left: 40 },
            width = 800 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        let svg = d3.select("#stat-graph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

    }, [])

    return <div id="stat-graph"></div>
}

export default StatGraph;