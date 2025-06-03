import './StatGraph.css';
import * as d3 from 'd3';
import { useEffect, useRef } from 'react';
import { useStats } from '../../Contexts/StatsContext';

function StatGraph() {
    const { exerciseData, metrics } = useStats();
    const graphRef = useRef(null);

    useEffect(() => {
        function drawGraph() {
            d3.select(graphRef.current).selectAll("*").remove();

            const container = graphRef.current;
            const width = container.offsetWidth || 800;
            const height = container.offsetHeight || 400;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;

            let svg = d3.select(container)
                .append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            const allDates = Array.from(new Set(
                exerciseData.flatMap(ex => ex.data.map(d => d.date))
            ));
            const parseDate = d3.timeParse("%Y %m %d");
            const dates = allDates.map(parseDate).sort(d3.ascending);

            const x = d3.scaleBand()
                .domain(dates)
                .range([0, innerWidth])
                .padding(0.2);

            const allValues = exerciseData.flatMap(ex => ex.data.map(d => d[metrics]));
            const y = d3.scaleLinear()
                .domain([0, d3.max(allValues)])
                .range([innerHeight, 0]);

            svg.append("g")
                .attr("transform", `translate(0,${innerHeight})`)
                .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m-%d")));

            svg.append("g")
                .call(d3.axisLeft(y));

            const color = d3.scaleOrdinal(d3.schemeCategory10);

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

                svg.append("text")
                    .attr("x", innerWidth - 100)
                    .attr("y", 20 + i * 20)
                    .attr("fill", color(i))
                    .text(ex.name);
            });
        }

        drawGraph();
        window.addEventListener('resize', drawGraph);
        return () => window.removeEventListener('resize', drawGraph);
    }, [exerciseData, metrics]);

    return <div id="stat-graph" ref={graphRef} style={{ width: "100%", height: "400px" }} />;
}

export default StatGraph;