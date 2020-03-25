function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }



fetch('https://corona.lmao.ninja/countries')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
    console.log(data);
    const xlables = [];
    const xdataC = [];
    const xdataW = [];
    const xdataZ = [];
    dane = data;
    dane.sort(function (a, b) {
        return a.cases - b.cases;
    });
    for (let f = 0; f < dane.length; f++) {
        xdataC.push(dane[f].cases);
        xdataZ.push(dane[f].deaths);
        xdataW.push(dane[f].recovered);
        xlables.push(dane[f].country);

    }

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        label: "XDD",
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
            },{
                label: 'Wyleczeni',
                data: xdataW,
                backgroundColor: 'rgb(0, 255, 0)',
                borderColor: 'rgb(0, 255, 0)',
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
fetch('https://covid19.mathdro.id/api/daily')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
        console.log(data);
        const dane = data;
        const blables = [];
        const bdataC = [];
        const bdataZ = [];
        const bdataZZ = [];
        for (let f = 0; f < data.length; f++) {
            bdataC.push(dane[f].confirmed.total);
            bdataZ.push(dane[f].recovered.total);
            bdataZZ.push(dane[f].deaths.total);
            blables.push(dane[f].reportDate);

        }
        const ctx = document.getElementById('wyChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: blables,
                datasets: [{
                    label: 'Chorzy',
                    data: bdataC,
                   // backgroundColor: 'rgba(255,255,255)',
                    borderColor: 'rgba(255, 99, 132)',
                    borderWidth: 1
                },{
                    label: 'Wyleczeni',
                    data: bdataZ,
                    //backgroundColor: 'rgb(255,255,255)',
                    borderColor: 'rgb(0, 255, 0)',
                    borderWidth: 1
                },{
                    label: 'Zgony',
                    data: bdataZZ,
                    //backgroundColor: 'rgb(255,255,255)',
                    borderColor: 'rgb(102, 102, 102)',
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
    fetch('https://covid19.mathdro.id/api/daily')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
        console.log(data);
        const dane = data;
        const vlables = [];
        const vdataC = [];
        const vdataZ = [];
        const vdataZZ = [];
        for (let f = 0; f < data.length; f++) {
            vdataC.push(dane[f].deltaConfirmed);
            vdataZ.push(dane[f].deltaRecovered);
            //vdataZZ.push(dane[f].deltaConfirmedDetail);
            vlables.push(dane[f].reportDate);

        }
        const ctx = document.getElementById('xyChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            label: "XDD",
            data: {
                labels: vlables,
                datasets: [{
                    label: 'Chorzy',
                    data: vdataC,
                    //backgroundColor: 'rgba(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132)',
                    borderWidth: 1
                },{
                    label: 'Zyleczeni',
                    data: vdataZ,
                    //backgroundColor: 'rgb(0, 255, 0)',
                    borderColor: 'rgb(0, 255, 0)',
                    borderWidth: 1
                }/*,{
                    label: 'Zgony',
                    data: vdataZZ,
                    //backgroundColor: 'rgb(102, 102, 102)',
                    borderColor: 'rgb(102, 102, 102)',
                    borderWidth: 1
                }*/]
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
