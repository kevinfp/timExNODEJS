var fs = require("fs");//Importation du module d'importation du module du fichier

var data = fs.readFileSync('04_fichier.txt');

console.log(data.toString());
console.log("Program Ended");