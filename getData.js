let salesByCity =[];
let salesByCityDataPoints = [];
let quantityByCity = [];
let quantityByCityDataPoints =[];

fetch('data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        salesByCity = data.salesByCity;
        for (const key in salesByCity) {
            salesByCityDataPoints.push(
                {label: key, y: salesByCity[key]}
            )
        }

        quantityByCity = data.quantityByCity;
        for (const key in quantityByCity) {
            quantityByCityDataPoints.push(
                {label: key, y: quantityByCity[key]}
            )
        }
        console.log(quantityByCityDataPoints);
        showChart();
        showBarChart();
        showPieChart();
        showDoughnutChart();
        showLineChart();
        showScatterChart();
    })
    .catch(function(error){
        console.log(error);
    });

const showChart = function (){
    const chart3 = new CanvasJS.Chart("dataChart",{
        
        axisY : {
            title : "Sales in USD"
        },
        axisY2 : {
            title : "Sold Quantity in PCS",
            maximum: 70000
        },
        data: [
            {
                type: "column",
                indexLabel: "${ y }",
                dataPoints: salesByCityDataPoints
            },
            {
                type: "line",
                axisYType : "secondary",
                dataPoints: quantityByCityDataPoints   
            }
        ]

    });
    chart3.render();
}
const showBarChart = function (){
    const chart4 = new CanvasJS.Chart("dataBarChart",{
        
        axisY : {
            title : "Sales in USD"
        },
        data: [
            {
                type: "bar",
                dataPoints: salesByCityDataPoints
            }
        ]

    });
    chart4.render();
}

const showPieChart = function (){
    const chart5 = new CanvasJS.Chart("dataPieChart",{
        
        axisY : {
            title : "Sales in USD"
        },
        data: [
            {
                type: "pie",
                dataPoints: salesByCityDataPoints
            }
        ]

    });
    chart5.render();
}

const showDoughnutChart = function (){
    const chart6 = new CanvasJS.Chart("dataDoughnutChart",{
        
        axisY : {
            title : "Sales in USD"
        },
        data: [
            {
                type: "doughnut",
                dataPoints: salesByCityDataPoints
            }
        ]

    });
    chart6.render();
}

const showLineChart = function (){
    const chart7 = new CanvasJS.Chart("dataLineChart",{
        
        axisY : {
            title : "Sales in USD"
        },
        data: [
            {
                type: "line",
                dataPoints: salesByCityDataPoints
            }
        ]

    });
    chart7.render();
}

const showScatterChart = function (){
    const chart8 = new CanvasJS.Chart("dataScatterChart",{
        
        axisY : {
            title : "Sales in USD"
        },
        data: [
            {
                type: "scatter",
                markerSize: 10,
                dataPoints: salesByCityDataPoints
            }
        ]

    });
    chart8.render();
}