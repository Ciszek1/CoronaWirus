function titleCase(string) {
	var sentence = string.toLowerCase().split(" ");
	for(var i = 0; i< sentence.length; i++){
	   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
	}
 return sentence;
 }
 function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
  }




function start(){
	var mymap = L.map('Map', {
		    minZoom: 6
	}).setView([52.125736,19.080392], 6);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	  }).addTo(mymap);
	  mymap.dragging.disable();



	fetch('https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true')
	.then((response) => {
    return response.json();
	})
	.then((data) => {
	console.log(data);
	var chorzy = data.infected;
	var smierci = data.deceased;
	var zdrowi = '0';
	console.log("Chorzy: "+chorzy+" Śmierci: "+smierci);
	document.querySelector('#Dane').innerHTML = "Dane z "+data.lastUpdatedAtApify+". Ze strony <a href='"+data.sourceUrl+"'>"+data.sourceUrl+"</a>";
	document.querySelector('#Potwie').innerHTML = chorzy;
	document.querySelector('#Zmar').innerHTML = smierci;
	document.querySelector('#Wyzdr').innerHTML = zdrowi
	document.querySelector('#Chorz').innerHTML = chorzy - smierci - zdrowi;
    var dolnoslaskie = L.marker([51.2001881,16.2611663], {myCustomId: 1})
	.addTo(mymap).on('mouseover', onClick);
	var kujawskopomorskie = L.marker([53.1185761,18.1877976], {myCustomId: 2})
	.addTo(mymap).on('mouseover', onClick);
	var lubelskie = L.marker([51.2703768,22.571149], {myCustomId: 3})
	.addTo(mymap).on('mouseover', onClick);
	var lubuskie = L.marker([52.2299127,15.333197], {myCustomId: 4})
	.addTo(mymap).on('mouseover', onClick);
	var lodzkie = L.marker([51.6847673,19.4620422], {myCustomId: 5})
	.addTo(mymap).on('mouseover', onClick);
	var malopolskie = L.marker([49.8925399,20.121513], {myCustomId: 6})
	.addTo(mymap).on('mouseover', onClick);
	var mazowieckie = L.marker([52.2474351,21.1087746], {myCustomId: 7})
	.addTo(mymap).on('mouseover', onClick);
	var opolskie = L.marker([50.6524978,17.8857739], {myCustomId: 8})
	.addTo(mymap).on('mouseover', onClick);
	var podkarpackie = L.marker([50.0300812,22.2125714], {myCustomId: 9})
	.addTo(mymap).on('mouseover', onClick);
	var podlaskie = L.marker([53.1583516,23.0446866], {myCustomId: 10})
	.addTo(mymap).on('mouseover', onClick);
	var pomorskie = L.marker([54.2534176,18.0772627], {myCustomId: 11})
	.addTo(mymap).on('mouseover', onClick);
	var slaskie = L.marker([50.2945824,18.9887949], {myCustomId: 12})
	.addTo(mymap).on('mouseover', onClick);
	var swietokrzyskie = L.marker([50.7348736,20.7483421], {myCustomId: 13})
	.addTo(mymap).on('mouseover', onClick);
	var warminskomazurskie = L.marker([53.8485797,20.937152], {myCustomId: 14})
	.addTo(mymap).on('mouseover', onClick);
	var wielkopolskie = L.marker([52.3616119,17.0551694], {myCustomId: 15})
	.addTo(mymap).on('mouseover', onClick);
	var zachodniopomorskie = L.marker([53.6105828,15.5665963], {myCustomId: 16})
    .addTo(mymap).on('mouseover', onClick);

	document.getElementById("loader").classList.remove("widzialny");
	document.getElementById("loader").classList.add("niewidzialny");


    function onClick(e) {
	console.log(this.options.myCustomId);
	var ID = this.options.myCustomId - 1
	var namew = titleCase(data.infectedByRegion[ID].region);
	var chorzyw = data.infectedByRegion[ID].infectedCount;
	var smieciw = data.infectedByRegion[ID].deceasedCount;
	var zdrowiw = 0;
    var terzz = chorzyw - smieciw - zdrowiw;
    this.bindPopup('<center><div class="hes">'+namew+'</div><div class="gh"><div class="conf">'+chorzyw+'</div><div class="nap">Confirmed'+'</div></br><div class="ded">'+smieciw+'</div><div class="nap">'+'Deaths'+'</div></br><div class="rec">'+zdrowiw+'</div><div class="nap">Recovered'+'</div></br><div class="exi">'+terzz+'</div><div class="nap">Existing</div>').addTo(mymap);
    this.openPopup();

    document.querySelector('#Wysz').oninput = function (){

    	document.getElementById("wyszukiwarka").classList.add("widzialny");
    	document.getElementById("wyszukiwarka").classList.remove("niewidzialny");

    	var val = document.querySelector('#Wysz').value;

    	if (val == "") {
    	document.getElementById("wyszukiwarka").classList.remove("widzialny");
    	document.getElementById("wyszukiwarka").classList.add("niewidzialny");
    	}

	    var ff = data.infectedByRegion;
		var options = {
		  shouldSort: true,
		  threshold: 0,
		  location: 0,
		  distance: 10,
		  maxPatternLength: 32,
		  minMatchCharLength: 1,
		  keys: [
		    "region"
		  ]
		};
		var fuse = new Fuse(ff, options); // "list" is the item array
		var result = fuse.search(val);
		console.log(result);
		var to = "";
	    for (var i = 0; i < result.length && i < 4; i++) {

	    	const key = ff.find(ff => ff.country === result[i].country);
	    	console.log(key);
			var nazwaE = titleCase(result[i].region);
			var chorzyE = result[i].infectedCount;
			var smierciE = result[i].deceasedCount;
			var zdrowiE = 0;
	    	to = to+"<div class='wyszukane'><div class='flag'></div><div class='info'><div class='NazwaKraju'>Kraj: "+nazwaE+"</div><br/><div class='info2'> Potwierdzone: "+chorzyE+".	Śmierci: "+smierciE+"</div></div></div><br/>";
	    }
		document.querySelector("#wyszukiwarka").innerHTML = to;


    }
}});
}


