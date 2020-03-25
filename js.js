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
  function chowanie(co){
	document.querySelector(co).classList.remove("widzialny");
	document.querySelector(co).classList.add("niewidzialny");
  }
  function powarz(co){
	document.querySelector(co).classList.add("widzialny");
	document.querySelector(co).classList.remove("niewidzialny");
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
		var pr = data[this.options.myCustomId].countryInfo.iso3;
		var tc = co -de -re;
		document.querySelector('#nazwa').innerHTML = "<img width='90px' height='60px' src="+fl+">"+na;
		document.querySelector('#PotwieW').innerHTML = co;
		document.querySelector('#SmierciW').innerHTML = de;
		document.querySelector('#WyzdW').innerHTML = re;
		document.querySelector('#ChorW').innerHTML = tc;


		fetch("https://covidapi.info/api/v1/country/"+pr+"/timeseries/2019-01-10/2021-08-19")
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		const dane = data.result;
        const blables = [];
		const bdataC = [];
		const bdataR = [];
		const bdataZ = [];
		for (let i = 0; i < dane.length; i++) {
			bdataC.push(dane[i].confirmed);
			bdataR.push(dane[i].recovered);
			bdataZ.push(dane[i].deaths);
            blables.push(dane[i].date);
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
                },{
					label: 'Zgony',
					data: bdataZ,
					//backgroundColor: 'rgba(0, 0, 0)',
					borderColor: 'rgba(0, 0, 0)',
					borderWidth: 1
				},{
					label: 'Wyleczeni',
					data: bdataR,
					//backgroundColor: 'rgb(0, 255, 0)',
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


		console.log("GODD "+this.options.myCustomId);
		document.getElementById("stats").classList.add("widzialny");
    	document.getElementById("stats").classList.remove("niewidzialny");
	  }
	  function onClick(e) {
		console.log(this.options.myCustomId);
		var na = data[this.options.myCustomId].country;
		var fl = data[this.options.myCustomId].countryInfo.flag;
		var cn = data[this.options.myCustomId].countryInfo.iso2;
		var co = data[this.options.myCustomId].cases;
		var de = data[this.options.myCustomId].deaths;
		var re = data[this.options.myCustomId].recovered;
		var fl = data[this.options.myCustomId].countryInfo.flag;
		var terzz = co - de - re;
		this.bindPopup('<center><div class="hes"><img width="28px" height="17px" src="'+fl+'">  '+na+'</div><div class="gh"><div class="conf">'+co+'</div><div class="nap">Confirmed'+'</div></br><div class="ded">'+de+'</div><div class="nap">'+'Deaths'+'</div></br><div class="rec">'+re+'</div><div class="nap">Recovered'+'</div></br><div class="exi">'+terzz+'</div><div class="nap">Existing</div>').addTo(mymap);
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
	document.querySelector('#Dane').innerHTML = "Dane z "+"Teraz"+". Ze strony <a href='https://corona.lmao.ninja/countries'>https://corona.lmao.ninja/countries</a>";
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
		
		/*var wielkosc = data[i].cases / 500  * 100000;
		if(wielkosc > 1000000)
		{
			wielkosc = 1000000;
		}
		var circle = L.circle([data[i].countryInfo.lat, data[i].countryInfo.long], {
			myCustomId: i,
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5,
			radius: wielkosc
		}).addTo(mymap).on('mouseover', onClick).on('click', stats);*/
	}



});
}


