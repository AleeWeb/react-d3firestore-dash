import React, { useEffect } from "react";
import firebase from "../../firebaseConfig";
import * as d3 from "d3";

const db = firebase.firestore();

export default function BarChart() {
  
    useEffect(() => {
        //Firestore database collection title is sales.
        db.collection('sales').get().then(res => { //database server response
            let data = [];
            res.docs.forEach(doc => {   //Firestore documents inside db collections
                data.push(doc.data()); //D3 data() method on the firestore doc to get the data in the doc.
            });
            console.log(data);

            // select the svg container first
            const svg = d3.select('.canvas')
                .append('svg')
                .attr('width', '600')
                .attr('height', '400');

            //----------- Start custom D3 code below HERE-----------------

            const margin = { top: 20, right: 20, bottom: 100, left: 100 };
            const graphWidth = 600 - margin.left - margin.right;
            const graphHeight = 400 - margin.top - margin.bottom;

            const graph = svg.append('g')
                .attr('width', graphWidth)
                .attr('height', graphHeight)
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

            // create axes groups
            const xAxisGroup = graph.append('g')
                .attr('transform', `translate(0, ${graphHeight})`)

            const yAxisGroup = graph.append('g');

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.amount)])
                .range([graphHeight, 0]);

            const x = d3.scaleBand()
                .domain(data.map(item => item.date))
                .range([0, graphWidth])
                .paddingInner(0.2)
                .paddingOuter(0.2);

            // join the data to circs
            const rects = graph.selectAll('rect')
                .data(data);

            // add attrs to circs already in the DOM
            rects.attr('width', '50')
                .attr("height", d => graphHeight - y(d.amount))
                .attr('fill', 'SlateBlue')
                .attr('x', d => x(d.date))
                .attr('y', d => y(d.amount));

            // append the enter selection to the DOM
            rects.enter()
                .append('rect')
                .attr('width', '50')
                .attr("height", 0)
                .attr('fill', 'SlateBlue')
                .attr('id', d => (d.id))
                .attr('x', (d) => x(d.date))
                .attr('y', graphHeight)
                .transition().duration(500)
                 .attr('y', d => y(d.amount))
                 .attr("height", d => graphHeight - y(d.amount))

            // create & call axesit
            const xAxis = d3.axisBottom(x);
            const yAxis = d3.axisLeft(y)
                .ticks(4)
                .tickFormat(d => d + ' dollars');

            xAxisGroup.call(xAxis);
            yAxisGroup.call(yAxis);

            // Bottom Chart Text
            xAxisGroup.selectAll('text')
                .attr('fill', 'Teal')
                //.attr('font-weight', 'bold')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')
        });

    }, []); // Array for data

    return (
        <div className="canvas">
            <h5 className="text-center">2018-2019 Sales Data</h5>
        </div>
    );

}

