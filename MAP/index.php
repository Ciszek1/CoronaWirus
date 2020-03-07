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
body
{
	background-color: #303030;
	color: #ffffff;
	font-family: 'Lato', sans-serif;
	font-size: 20px;
	margin: 0 !important;
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
document.getElementById('map').style.height = window.innerHeight;
document.getElementById('map').style.width = window.innerWidth;

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
	for(i =0;i < aut.confirmed.latest;i++){
			//document.write('<br>'+aut.Vehicles[i].Line)

			var terzz = aut.confirmed.locations[i].latest - aut.deaths.locations[i].latest - aut.recovered.locations[i].latest;
		var ccc = L.marker([aut.confirmed.locations[i].coordinates.lat, aut.confirmed.locations[i].coordinates.long]).addTo(map)
		    .bindPopup(aut.confirmed.locations[i].country+'</br>'+'Confirmed:'+aut.confirmed.locations[i].latest+'</br>'+'Deaths:'+aut.deaths.locations[i].latest+'</br>'+'Recovered:'+aut.recovered.locations[i].latest+'</br>'+'Now sick:'+terzz)
 		   .openPopup();
		}
	}
		//setInterval(d, 5000)
	</script>
</body>
</html>
</body>
</html>