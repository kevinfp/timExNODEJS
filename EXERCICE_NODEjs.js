var http = require("http"); //IMPORTE LE MODULE SERVEUR HTTP
var fs = require('fs');
var obj;
var returnProvince;
var oProvince;
fs.readFile('EXERCICE_provinces.json', 'utf-8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  returnProvince = affiche_objet(obj);

});

console.log("Program Ended");


var monObjet = oProvince;
var uneProvinceCanadienne;

function affiche_objet(monObjet)
{
	for(propriete in monObjet)
	{

		uneProvinceCanadienne += '<tr>'+'<td>' + propriete + '</td>' +  '<td>' + monObjet[propriete] +'</td>'+ '</tr>';
		console.log(uneProvinceCanadienne);

	}
	return uneProvinceCanadienne;
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h1>CANADUH</h1>");
  response.write("<table>" + returnProvince + "</table>")
  response.end();
}).listen(3000);