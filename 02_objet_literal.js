var oProvince = [
	"QC - Québec",
	"ON - Ontario",
	"AL - Alberta"
]

oProvince['BC']= 'Colombie-Britannique'
oProvince.MA = "Manitoba"

var monObjet = oProvince;

function affiche_objet(monObjet)
{
	for(propriete in monObjet)
	{
		console.log(propriete + ' - ' +  monObjet[propriete])
	}
}

affiche_objet(oProvince);
