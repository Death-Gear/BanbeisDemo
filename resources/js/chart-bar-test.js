Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {

    type: 'bar',
    data: {

        labels: ["Barisal", "Chittagong", "Dhaka", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"],
        datasets: [{
            label: "PSC",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [14984, 9821, 7841, 6251, 8312, 5815, 10841, 12251]
        },
            {
                label: "JSC",
                backgroundColor: "#1cc88a",
                hoverBackgroundColor: "#13855c",
                borderColor: "#1cc88a",
                data: [14584, 9521, 7541, 5851, 9912, 5415, 10541, 11851]
            },
            {
                label: "SSC",
                backgroundColor: "#f6c23e",
                hoverBackgroundColor: "#dda20a",
                borderColor: "#dda20a",
                data: [13984, 8921, 6941, 5251, 9312, 4815, 9941, 11251]
            }
        ],
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
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        maxTicksLimit: 6
                    },
                    maxBarThickness: 25,
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 15000,
                        maxTicksLimit: 5,
                        padding: 10
                    },
                    gridLines: {
                        color: "rgb(234, 236, 244)",
                        zeroLineColor: "rgb(234, 236, 244)",
                        drawBorder: false,
                        borderDash: [2],
                        zeroLineBorderDash: [2]
                    }
                }],
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
    }

});