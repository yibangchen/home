import React, { Component } from 'react';
import * as d3 from 'd3';
import './Fireworks.css';

class Fireworks extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.setOffFireworks();
  }

  setOffFireworks = () => {
  
    const width = 960,
        height = 500,
        color = d3.scale.ordinal().range(['#f7a91e', '#d9f71e']),
        rand = d3.random.normal(width/2,100),
        randomX = function(b){ return d3.random.normal(b, 80)()},
        randomY = d3.random.normal(height/2, 80);
    
    const svg = d3.select("body").append("svg")
                  .attr("width", width)
                  .attr("height", height);

    const data = d3.range(100).map(() =>  ({x: randomX(width/2), y: randomY()}) );

    const circles = svg.selectAll("circle").data(data).enter()
                  .append("circle");

    const fireworks = () => {
      const base = rand();
      data = d3.range(100).map(() => ({
        x: randomX(base), 
        y: randomY()
      }));
      circles.transition().ease('circle').duration(1500).attr({cy:height/2})

      circles.data(data)
        .attr("opacity",1)
        .attr({r:3,cx:base,cy:height,fill:"gray"})
        .transition()
          .ease('circle')
          .duration(1500)
          .attr({cy:height/2})
        .transition().delay(1400)
          .ease("exp")
          .duration(300)
          .attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; })
          .attr("r", 10)
          .attr("opacity",1)
          .attr("fill", function(d){ return color(d.x); })
          .transition()
          .ease("circle")
          .duration(2000)
          .attr("opacity",0)
          .attr("cx", function(d){ if(d.x > base){
              return d.x + (d.x-base)
          }return d.x - (base - d.x)})
          .attr("cy", function(d){ if(d.y > height/2){
              return d.y + (d.y-height/2)
          }return d.y - (height/2 - d.y)})
          .attr("r", 0);
    }

    setInterval(fireworks, 4000);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Fireworks;