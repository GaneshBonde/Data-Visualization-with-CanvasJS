const chart2 = new CanvasJS.Chart("emptyChart",{
    title:{
        text: "My Canvas Js Empty chart",
        fontFamily: "roboto mono"
    },
    axisX : {
        title: "X Axis"
    },
    axisY : {
        title : "Y axis"
    }, 
    data: [
        {
        type: "line",
        dataPoints: [
                {x: 1, y : null},
                {x: 2, y : null},
                {x: 3, y : null}
        ]
        }
    ]
});



chart2.render();


