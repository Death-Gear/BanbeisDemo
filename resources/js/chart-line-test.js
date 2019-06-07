Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {

    type: 'line',
    data: {

        labels: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Inter 1st Year", "Inter 2nd Year"],
        datasets: [{
            label: "Male Students",
            lineTension: 0.3,
            backgroundColor: "rgba(29, 146, 216, 0.2)",
            borderColor: "rgba(29, 146, 216, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(29, 146, 216, 1)",
            pointBorderColor: "rgba(29, 146, 216, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(29, 146, 216, 1)",
            pointHoverBorderColor: "rgba(29, 146, 216, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [30000, 25000, 27000, 20000, 15000, 14000, 11000]
        },
            {
                label: "Female Students",
                lineTension: 0.3,
                backgroundColor: "rgba(186, 65, 119, 0.2)",
                borderColor: "rgba(186, 65, 119, 1)",
                pointRadius: 3,
                pointBackgroundColor: "rgba(186, 65, 119, 1)",
                pointBorderColor: "rgba(186, 65, 119, 1)",
                pointHoverRadius: 3,
                pointHoverBackgroundColor: "rgba(186, 65, 119, 1)",
                pointHoverBorderColor: "rgba(186, 65, 119, 1)",
                pointHitRadius: 10,
                pointBorderWidth: 2,
                data: [25000, 20000, 22000, 23000, 13000, 12000, 10000]
            }]

    },
    options: {

        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },

        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgb(255, 255, 255)",
                    zeroLineColor: "rgb(255, 255, 255)",
                    display: true,
                    drawBorder: true
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10
                },
                gridLines: {
                    color: "rgb(255, 255, 255)",
                    zeroLineColor: "rgb(255, 255, 255)",
                    drawBorder: true
                }
            }]
        },

        tooltips: {
            titleMarginBottom: 10,
            titleFontSize: 14,
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10
        }

    }


});