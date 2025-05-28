import './StatGraph.css';

import * as d3 from 'd3';
import { useEffect } from 'react';

import { useStats } from '../../Contexts/StatsContext';

function StatGraph() {
    const { exerciseData, metrics } = useStats();

    useEffect(() => {
        d3.select("#stat-graph").selectAll("*").remove();

        let margin = { top: 20, right: 30, bottom: 30, left: 40 },
            width = 800 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        let svg = d3.select("#stat-graph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Gather all unique dates
        const allDates = Array.from(new Set(
            exerciseData.flatMap(ex => ex.data.map(d => d.date))
        ));
        const parseDate = d3.timeParse("%Y %m %d");
        const dates = allDates.map(parseDate).sort(d3.ascending);

        // X scale
        const x = d3.scaleBand()
            .domain(dates)
            .range([0, width])
            .padding(0.2);

        // Gather all values for Y scale
        const allValues = exerciseData.flatMap(ex => ex.data.map(d => d[metrics]));
        const y = d3.scaleLinear()
            .domain([0, d3.max(allValues)])
            .range([height, 0]);

        // X axis
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d")));

        // Y axis
        svg.append("g")
            .call(d3.axisLeft(y));

        // Color scale for exercises
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // Draw dots for each set
        exerciseData.forEach((ex, i) => {
            ex.data.forEach(set => {
                const date = parseDate(set.date);
                if (!date) return;
                svg.append("circle")
                    .attr("cx", x(date) + x.bandwidth() / 2)
                    .attr("cy", y(set[metrics]))
                    .attr("r", 6)
                    .attr("fill", color(i))
                    .attr("opacity", 0.8);
            });

            // Add legend
            svg.append("text")
                .attr("x", width - 100)
                .attr("y", 20 + i * 20)
                .attr("fill", color(i))
                .text(ex.name);
        });

    }, [exerciseData, metrics]);

    return <div id="stat-graph"></div>
}

export default StatGraph;