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

        // For each exercise
        exerciseData.forEach((ex, i) => {
            // Group data by date
            const grouped = d3.groups(ex.data, d => d.date);

            grouped.forEach(([dateStr, sets]) => {
                const values = sets.map(s => s[metrics]).sort(d3.ascending);
                if (values.length === 0) return;

                // Calculate box plot stats
                const min = d3.min(values);
                const max = d3.max(values);
                const q1 = d3.quantile(values, 0.25);
                const median = d3.quantile(values, 0.5);
                const q3 = d3.quantile(values, 0.75);

                const date = parseDate(dateStr);
                const boxWidth = x.bandwidth() / exerciseData.length;
                const xPos = x(date) + i * boxWidth;

                // Draw box
                svg.append("rect")
                    .attr("x", xPos)
                    .attr("y", y(q3))
                    .attr("width", boxWidth)
                    .attr("height", y(q1) - y(q3))
                    .attr("stroke", color(i))
                    .attr("fill", color(i))
                    .attr("opacity", 0.5);

                // Draw median line
                svg.append("line")
                    .attr("x1", xPos)
                    .attr("x2", xPos + boxWidth)
                    .attr("y1", y(median))
                    .attr("y2", y(median))
                    .attr("stroke", "black");

                // Draw min/max whiskers
                svg.append("line")
                    .attr("x1", xPos + boxWidth / 2)
                    .attr("x2", xPos + boxWidth / 2)
                    .attr("y1", y(min))
                    .attr("y2", y(max))
                    .attr("stroke", color(i));

                // Whisker caps
                svg.append("line")
                    .attr("x1", xPos + boxWidth * 0.25)
                    .attr("x2", xPos + boxWidth * 0.75)
                    .attr("y1", y(min))
                    .attr("y2", y(min))
                    .attr("stroke", color(i));
                svg.append("line")
                    .attr("x1", xPos + boxWidth * 0.25)
                    .attr("x2", xPos + boxWidth * 0.75)
                    .attr("y1", y(max))
                    .attr("y2", y(max))
                    .attr("stroke", color(i));
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