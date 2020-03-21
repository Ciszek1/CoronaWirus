function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }



fetch('https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
    console.log(data);
    const xlables = [];
    const xdataC = [];
    const xdataZ = [];
    dane = data.infectedByRegion;
    dane.sort(function (a, b) {
        return a.infectedCount - b.infectedCount;
    });
    for (let f = 0; f < dane.length; f++) {
        xdataC.push(dane[f].infectedCount);
        xdataZ.push(dane[f].deceasedCount);
        xlables.push(dane[f].region);

    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xlables,
            datasets: [{
                label: 'Chorzy',
                data: xdataC,
                backgroundColor: 'rgba(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132)',
                borderWidth: 1
            },{
                label: 'Zgony',
                data: xdataZ,
                backgroundColor: 'rgba(0, 0, 0)',
                borderColor: 'rgba(0, 0, 0)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
fetch('https://api.apify.com/v2/datasets/L3VCmhMeX0KUQeJto/items?format=json&clean=1')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
        console.log(data);
        const dane = data;
        const blables = [];
        const bdataC = [];
        const bdataZ = [];
        var temp = "";
        for (let f = 0; f < data.length; f++) {
            temp = dane[f].lastUpdatedAtApify;
            console.log(temp.substr(0,10))
            bdataC.push(dane[f].infected);
            bdataZ.push(dane[f].deceased);
            blables.push(temp.substr(0,10));

        }
        const ctx = document.getElementById('wyChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: blables,
                datasets: [{
                    label: 'Chorzy',
                    data: bdataC,
                    backgroundColor: 'rgba(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132)',
                    borderWidth: 1
                },{
                    label: 'Zgony',
                    data: bdataZ,
                    backgroundColor: 'rgba(0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });