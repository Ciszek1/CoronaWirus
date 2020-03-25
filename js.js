function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }
  function zchowajs(){
	document.getElementById("stats").classList.remove("widzialny");
	document.getElementById("stats").classList.add("niewidzialny");
  }




function start(){
	var mymap = L.map('Map', {
		    minZoom: 2
	}).setView([51.505, -0.09], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(mymap);
	fetch('https://corona.lmao.ninja/countries')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
	console.log(data);
	function stats(e){

		var na = data[this.options.myCustomId].country;
		var cn = data[this.options.myCustomId].countryInfo.iso2;
		var fl = data[this.options.myCustomId].countryInfo.flag;
		//var pr = data.locations[this.options.myCustomId].province;
		var co = data[this.options.myCustomId].cases;
		var de = data[this.options.myCustomId].deaths;
		var re = data[this.options.myCustomId].recovered;
		var tc = co -de -re;
		document.querySelector('#nazwa').innerHTML = "<img width='90px' height='60px' src="+fl+">"+na;
		document.querySelector('#PotwieW').innerHTML = co;
		document.querySelector('#SmierciW').innerHTML = de;
		document.querySelector('#WyzdW').innerHTML = re;
		document.querySelector('#ChorW').innerHTML = tc;


		fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country="+na, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key": "2ac3b3f824msh4f3d4828a0f7025p1d642djsn81b28239a293"
			}
		})
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		/*const dane = data.stat_by_country;
        const blables = [];
        const bdataC = [];
        for (let f = 0; f < dane.length; f=f+50) {
			console.log(f);

            bdataC.push(dane[f].total_cases);
            blables.push(dane[f].record_date);

        }
        const ctx = document.getElementById('wyChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: blables,
                datasets: [{
                    label: 'Chorzy',
                    data: bdataC,
                    //backgroundColor: 'rgba(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132)',
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
        });*/






		});


		console.log("GODD "+this.options.myCustomId);
		document.getElementById("stats").classList.add("widzialny");
    	document.getElementById("stats").classList.remove("niewidzialny");
	  }
	  function onClick(e) {
		console.log(this.options.myCustomId);
		var na = data[this.options.myCustomId].country;
		var cn = data[this.options.myCustomId].countryInfo.iso2;
		var co = data[this.options.myCustomId].cases;
		var de = data[this.options.myCustomId].deaths;
		var re = data[this.options.myCustomId].recovered;
		var fl = data[this.options.myCustomId].countryInfo.flag;
		var terzz = co - de - re;
		this.bindPopup('<center><div class="hes"><img width="20px" height="17px" src="https://www.countryflags.io/'+cn+'/flat/24.png">  '+na+'</div><div class="gh"><div class="conf">'+co+'</div><div class="nap">Confirmed'+'</div></br><div class="ded">'+de+'</div><div class="nap">'+'Deaths'+'</div></br><div class="rec">'+re+'</div><div class="nap">Recovered'+'</div></br><div class="exi">'+terzz+'</div><div class="nap">Existing</div>').addTo(mymap);
		this.openPopup();
	
		document.querySelector('#Wysz').oninput = function (){
	
			document.getElementById("wyszukiwarka").classList.add("widzialny");
			document.getElementById("wyszukiwarka").classList.remove("niewidzialny");
	
			var val = document.querySelector('#Wysz').value;
	
			if (val == "") {
			document.getElementById("wyszukiwarka").classList.remove("widzialny");
			document.getElementById("wyszukiwarka").classList.add("niewidzialny");
			}
	
			var ff = data;
			var options = {
			  shouldSort: true,
			  threshold: 0,
			  location: 0,
			  distance: 10,
			  maxPatternLength: 32,
			  minMatchCharLength: 1,
			  keys: [
				"country",
			  ]
			};
			var fuse = new Fuse(ff, options); // "list" is the item array
			var result = fuse.search(val);
			console.log(result);
			var to = "";
			for (var i = 0; i < result.length && i < 4; i++) {
	
				const key = ff.find(ff => ff.country === result[i].country);
				console.log(key);
				to = to+"<div class='wyszukane'><div class='flag'><img width='70px' height='40px' src='"+result[i].countryInfo.flag+"' /></div><div class='info'><div class='NazwaKraju'>Kraj: "+result[i].country+"</div><br/><div class='info2'> Potwierdzone: "+result[i].cases+"</div></div></div><br/>";
			}
			document.querySelector("#wyszukiwarka").innerHTML = to;
	
	
		}
	}



	fetch('https://corona.lmao.ninja/all')
	.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
	document.querySelector('#Dane').innerHTML = "Dane z "+"Teraz"+". Ze strony <a href='https://coronavirus-tracker-api.herokuapp.com/'>https://coronavirus-tracker-api.herokuapp.com/</a>";
	document.querySelector('#Potwie').innerHTML = data.cases;
	document.querySelector('#Zmar').innerHTML = data.deaths;
	document.querySelector('#Wyzdr').innerHTML = data.recovered;
	document.querySelector('#Chorz').innerHTML = data.cases - data.deaths - data.recovered;
	});

	  document.getElementById("loader").classList.remove("widzialny");
	  document.getElementById("loader").classList.add("niewidzialny");



    for (var i = 0; i <= data.length; i++) {
    	var markers = L.marker([data[i].countryInfo.lat, data[i].countryInfo.long], {myCustomId: i})
    	.addTo(mymap).on('mouseover', onClick).on('click', stats);
	}



});
}


