<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<!DOCTYPE html>
<html>
<head>

	<style type="text/css">
		#map{
	width: 1200px;
	height: 650px;
	float: left;
}
#stats{
	float: left;
}
	</style>



	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
  integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
  crossorigin=""></script>
	<title></title>
	<link rel="stylesheet" type="text/css" href="\astro.pl/css/Menu.css">
	<link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
	<script src=" https://unpkg.com/@joergdietrich/leaflet.terminator@1.0.0/L.Terminator.js"></script>
		
	</script>
</head>
<body>

	<div id="map"></div>




	<script type="text/javascript">
var map = L.map('map').setView([0, 0], 4);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

	var kk = 0;
	d()
	async function d(){
	const api_aut = 'https://coronavirus-tracker-api.herokuapp.com/all';
		const app_aut = await fetch(api_aut);


		const aut = await app_aut.json();


			if (kk > 0) {
			// map.removeLayer(xd);
		}
		var terz = aut.latest.confirmed - aut.latest.deaths - aut.latest.recovered;
		document.getElementById("conf").innerHTML = "Total Confirmed: "+aut.latest.confirmed;
		document.getElementById("teconf").innerHTML = "Now sick: "+terz;
		document.getElementById("deat").innerHTML = "Deaths: "+aut.latest.deaths;
		document.getElementById("reco").innerHTML = "Recovered: "+aut.latest.recovered;
	for(i =0;i < aut.confirmed.latest;i++){
			//document.write('<br>'+aut.Vehicles[i].Line)


		var ccc = L.marker([aut.confirmed.locations[i].coordinates.lat, aut.confirmed.locations[i].coordinates.long], {title: aut.confirmed.locations[i].latest }).addTo(map);
		}
	}
		//setInterval(d, 5000)
	</script>
	<div id="stats">
		<h1>Statistic:</h1>
		<h5><div id="conf"></div></h5>
		<h5><div id="teconf"></div></h5>
		<h5><div id="deat"></div></h5>
		<h5><div id="reco"></div></h5>

	</div>
</body>
</html>
</body>
</html>
