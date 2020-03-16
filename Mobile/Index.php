<!DOCTYPE html>
<html>
<head>
	<title>CoronaVirus Map</title>
	<!--POTRZEBME-->
	<script type="text/javascript" src="//code.jquery.com/jquery-1.9.1.min.js"></script>
	<script src="https://skrypt-cookies.pl/id/92bc5c1e1b78e6ee.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css.css">
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="crossorigin=""></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.6.1/fuse.min.js"></script>
   <!--KONIEC-->
   <script src="js.js"></script>




<!--MetaDane-->
<meta name="title" content="Mapa KoronaWirus(COVID-19)">
<meta name="description" content="Otrzymuj najświeższe informacje o epidemii wirusa Covid-19 Wuhan Coronavirus, zobacz regiony, statystyki, ofiary i wiele więcej.">
<meta name="keywords" content="KoronaWirus,COVID-19,KoronaWirus Mapa,COVID-19 Mapa,Mapa,">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="language" content="Polish">
<meta name="author" content="Ciszek">
<title>Mapa KoronaWirus(COVID-19)</title>
<!--Koniec MetaDene-->








</head>
<body onload="start()">
<div id="Container">
	<!--<div id="Napis">
		<input type="text" name="text" id="Wysz" placeholder="Wpisz nazwę kraju" />
	</div>-->
	<div id="Map"></div>
	<div id="wyszukiwarka" class="niewidzialny"></div>
	<div id="Stopka">Wersja: v0.1<br>Strona stworzona przez: <a href="https://lukasz-ciszewski.github.io">Łukasz Ciszewskiego</a> - Ciszewski.biznes@protonmail.com<br><div id="Dane"></div></div>
</div>
</body>
</html>