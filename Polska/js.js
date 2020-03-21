body{
	font-family: 'Raleway', sans-serif;
	background-color: #ffffff;
}
#Container{
	width: 100%;
	height: 100%;
}
#Napis{
	width: 100%;
	height: 50px;
	text-align: center;
}
input[type=text]{
	font-size: 35px;
	width: 60%;
	height: 100%;
	box-shadow: 0px 0px 29px 21px rgba(0,0,0,0.24);
	border-radius: 30px;
	border: 5px solid #666666;
	background-color: #a0a0a0;
	color: #666666;
	text-align: center;
	transition: all 0.2s linear;
	clear: both;
}
input[type=text]:hover
{
	width: 75%;
}
input[type=text]:focus
{
	width: 75%;
}
.wyszukane{
	margin-right: auto;
	margin-left: auto;
	width: 60%;
	height: 15%;
	border: 5px solid #666666;
	border-radius: 30px;
	margin-top: 40px;
	box-shadow: 0px 0px 29px 21px rgba(0,0,0,0.24);

}
#wyszukiwarka{
	position: absolute;
	background-color: white;
	width: 99%;
	height: 85.85%;
	margin-top: 75px;
	top: 0;

}
.flag{
	float: left;
	width: 10%;
	height: 100%;
	margin: auto;
	border-right: solid #666666;
	text-align: center;

}
.info{
	float: left;
	margin-left: 10px;
	width: 87.835%;
	height: 100%;
}
.NazwaKraju{
	border-bottom: solid #666666;
	font-size: 28px;
	font-weight: bold;
}
.info2{
	font-size: 20px;
}
.niewidzialny{
	display: none;
	z-index: -99999;
}
.widzialny{
	display: block;
	z-index: 9999;
}
#Content{
	width: 100%;
	height: 70%;
	margin-top: 30px;
}
#Map{
	border-radius: 30px;
	float: left;
	width: 75%;
	height: 570px;
}
#Obok{
	float: left;
	text-align: center;
}
#Stopka{
	width: 100%;
	clear: both;
}
.TextGora{
	margin-top: 13px;
	margin-bottom: 13px;
	font-size: 30px;
	font-weight: bold;
	position: relative;
}
.TextDoł{
	font-size: 19px;
}
.Licznik{
	border-radius: 15px;
	width: 150px;
	height: 90px;
	float: left;
	margin: 10px;
	text-align: center;
	border: 5px solid #666666;
	box-shadow: 0px 0px 29px 21px rgba(0,0,0,0.24);
	background-color: #a0a0a0;
	color: #666666;
}
#AD{
	width: 250px;
	height: 250px;

	margin-left: auto;
	margin-right: auto;
	margin-top: 40px;
	border-radius: 15px;
}
.conf{
	color: #ff416c;
	float: left;
	margin-right: 5px;
}
.ded{
	color: #8643e6;
	float: left;
	margin-right: 5px;
}
.rec{
	color: #61ce81;
	float: left;
	margin-right: 5px;
}
.nap{
	float: left;
}
.exi{
	color: #286eff;
	float: left;
	margin-right: 5px;
}
.wy{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background: white;
	z-index: 10000;
}
.nz{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 0%;
	height: 0%;
	background: white;
	z-index: -1000000;
}
#Namew{
	margin-right: auto;
	margin-left: auto;

}
.gh{
	text-align: left;
	height: 60px;
}
.hes{
	font-weight: bold;
	width: 120px;
}
#Napis > button{
	float: left;
	font-size: 28px;
	height: 100%;
	box-shadow: 0px 0px 29px 21px rgba(0,0,0,0.24);
	border-radius: 30px;
	border: 5px solid #666666;
	background-color: #a0a0a0;
	color: #666666;
	text-align: center;
}



















































  .sidebar {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #111;
	overflow-x: hidden;
	transition: 0.5s;
	padding-top: 60px;
	z-index: 999999;
  }
  
  .sidebar a {
	padding: 8px 8px 8px 32px;
	text-decoration: none;
	font-size: 25px;
	color: #818181;
	display: block;
	transition: 0.3s;
  }
  
  .sidebar a:hover {
	color: #f1f1f1;
  }
  
  .sidebar .closebtn {
	position: absolute;
	top: 0;
	right: 25px;
	font-size: 36px;
	margin-left: 50px;
  }
  
  .openbtn {
	font-size: 20px;
	cursor: pointer;
	background-color: #111;
	color: white;
	padding: 10px 15px;
	border: none;
  }
  
  .openbtn:hover {
	background-color: #444;
  }
  
  #main {
	transition: margin-left .5s;
	padding: 16px;
  }
  
  /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
	.sidebar {padding-top: 15px;}
	.sidebar a {font-size: 18px;}
  }
