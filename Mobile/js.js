function start(){
	var mymap = L.map('Map', {
		    minZoom: 2
	}).setView([51.505, -0.09], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
      }).addTo(mymap);
	fetch('https://coronavirus-tracker-api.herokuapp.com/all')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
    console.log(data);
    for (var i = 0; i <= data.confirmed.locations.length; i++) {
    	document.querySelector('#Dane').innerHTML = "Dane z "+data.confirmed.last_updated+". Ze strony <a href='"+data.confirmed.source+"'>"+data.confirmed.source+"</a>";
    	var markers = L.marker([data.confirmed.locations[i].coordinates.lat, data.confirmed.locations[i].coordinates.long], {myCustomId: i})
    	.addTo(mymap).on('click', onClick);
    }

	document.getElementById("Wysz").addEventListener("input", wyszuk());

    function onClick(e) {
    console.log(this.options.myCustomId)
    var terzz = data.confirmed.locations[this.options.myCustomId].latest - data.deaths.locations[this.options.myCustomId].latest - data.recovered.locations[this.options.myCustomId].latest;
    this.bindPopup('<center><div class="hes"><img width="20px" height="17px" src="https://www.countryflags.io/'+data.confirmed.locations[this.options.myCustomId].country_code+'/flat/24.png">  '+data.confirmed.locations[this.options.myCustomId].country+'</div><div class="gh"><div class="conf">'+data.confirmed.locations[this.options.myCustomId].latest+'</div><div class="nap">Confirmed'+'</div></br><div class="ded">'+data.deaths.locations[this.options.myCustomId].latest+'</div><div class="nap">'+'Deaths'+'</div></br><div class="rec">'+data.recovered.locations[this.options.myCustomId].latest+'</div><div class="nap">Recovered'+'</div></br><div class="exi">'+terzz+'</div><div class="nap">Existing</div>').addTo(mymap);
    this.openPopup();

    function wyszuk(){

    	document.getElementById("wyszukiwarka").classList.add("widzialny");
    	document.getElementById("wyszukiwarka").classList.remove("niewidzialny");

    	var val = document.querySelector('#Wysz').value;

    	if (val == "") {
    	document.getElementById("wyszukiwarka").classList.remove("widzialny");
    	document.getElementById("wyszukiwarka").classList.add("niewidzialny");
    	}

	    var ff = data.confirmed.locations;
		var options = {
		  shouldSort: true,
		  threshold: 0,
		  location: 0,
		  distance: 10,
		  maxPatternLength: 32,
		  minMatchCharLength: 1,
		  keys: [
		    "country"
		  ]
		};
		var fuse = new Fuse(ff, options); // "list" is the item array
		var result = fuse.search(val);
		console.log(result);
		var to = "";
	    for (var i = 0; i < result.length && i < 10; i++) {

	    	const key = ff.find(ff => ff.country === result[i].country);
	    	console.log(key);

	    	to = to+"<div class='wyszukane'><div class='flag'><img src='https://www.countryflags.io/"+result[i].country_code+"/flat/64.png' /></div><div class='info'><div class='NazwaKraju'>Kraj: "+result[i].country+"</div><br/><div class='info2'> Potwierdzone: "+result[i].latest+"</div></div></div><br/>";
	    }
		document.querySelector("#wyszukiwarka").innerHTML = to;


	}
	document.getElementById("Wysz").addEventListener("input", wyszuk);
}});
}


