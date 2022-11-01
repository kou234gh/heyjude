import React, { useEffect, RefObject } from 'react'
import * as d3 from "d3";



const Rectangle = () => {

  const ref: RefObject<HTMLDivElement> = React.createRef()

  useEffect(() => {
    draw();
  })

  console.log("ref.current:" + ref.current)


  async function draw() {


    let linksBefore = await fetch("https://people.sc.fsu.edu/~jburkardt/data/csv/example.csv")
    console.log(linksBefore)

    let linksVar = d3.csvParse(await linksBefore.text())

    let types: any = Array.from(new Set(linksVar.map(d => d.type)))

    let data = ({ nodes: Array.from(new Set(linksVar.flatMap(l => [l.source, l.target])), id => ({ id })), linksVar })

    let height = 600

    let color = d3.scaleOrdinal(types, d3.schemeCategory10);

    function linkArc(d: any) {
      const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
      return `
        M${d.source.x},${d.source.y}
        A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
      `;
    }

    function drag(simulation: any): any {

      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }


    const links = data.linksVar.map(d => Object.create(d));

    const nodes = data.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("x", d3.forceX())
      .force("y", d3.forceY());

    const svg = d3.create("svg")
      .attr("viewBox", [-960 / 2, -height / 2, 960, height])
      .style("font", "12px sans-serif");

    // Per-type markers, as they don't inherit styles.
    svg.append("defs").selectAll("marker")
      .data(types)
      .join("marker")
      .attr("id", d => `arrow-${d}`)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", -0.5)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      // .attr("fill", color)
      .attr("fill", "black")
      .attr("d", "M0,-5L10,0L0,5");

    const link = svg.append("g")
      .attr("fill", "none")
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("stroke", d => color(d.type))
      .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location.host)})`);

    const node = svg.append("g")
      .attr("fill", "currentColor")
      .attr("stroke-linecap", "round")
      .attr("stroke-linejoin", "round")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(drag(simulation));

    node.append("circle")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .attr("r", 4);

    node.append("text")
      .attr("x", 8)
      .attr("y", "0.31em")
      .text(d => d.id)
      .clone(true).lower()
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-width", 3);

    simulation.on("tick", () => {
      link.attr("d", linkArc);
      node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // invalidation.then(() => simulation.stop());

    return svg.node();





  }

  return (
    <div id='circles' className='w-[100%] h-[50vw] border-4 border-rose-700'>
    </div>
  )
}
export default Rectangle