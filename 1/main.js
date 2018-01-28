let dataset = []
for(let i=0; i<20; i++) {
    let value = Math.floor(Math.random() * 30);
    dataset.push(value)
}

/*
d3.csv("classicalRock.csv", function(data) {
   dataset = data
})
*/

//create bar chart with divs
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
        return d*5+"px"
    })

//create circles in svg    
const h = 200
const w = 600
const barPadding = 2

let svg = d3.select("body")
            .append("svg")
            .attr("height", h)
            .attr("width", w)

let circle = svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle")

circle.attr("cx", function(d, i) {return i*50 + 25})
        .attr("cy", h/2)
        .attr("r", function(d) {return d})
        .attr("fill", "#5f8e8c")

//create svg bar chart

let svgChart = d3.select("body")
                    .append("svg")
                    .attr("height", h)
                    .attr("width", w)

let bar = svgChart.selectAll("rect")
                    .data(dataset)
                    .enter()
                    .append("rect")

bar.attr("x", function(d, i) {return i*w/dataset.length})
    .attr("y", function(d){return h-d*5})
    .attr("height", function(d){return d*5})
    .attr("width", w/dataset.length - barPadding)
    .attr("fill", function(d){return "rgb(132, 32,"+ Math.floor(d*10) +")"})

let label = svgChart.selectAll("text")
                        .data(dataset)
                        .enter()
                        .append("text")
                        .text(function(d){return d})
                        //.attr("x",function(d, i) {return i*w/dataset.length})
                        //.attr("y",function(d){return h-d*5} )    
                        .attrs({
                            x:function(d, i) {return i*w/dataset.length;},
                            y:function(d){return h-d*5;},
                            "font-family": "sans-serif",
                            "font-size": "11px",
                            "fill": "black",
                            "text-anchor": "middle"
                        })