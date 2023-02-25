const infos=[
    {"NumCpt":"01234","CINCli":"A121212","NomCli":"ALAMI Mohammed","Solde":5000},
    {"NumCpt":"56789","CINCli":"A989898","NomCli":"SABIR Laila","Solde":10000},
    {"NumCpt":"98745","CINCli":"A456512","NomCli":"IMAD Ahmad","Solde":10000}
]
var num = document.getElementById("num")
var client = document.getElementById("client")
var solde = document.getElementById("solde")
var retrait = document.getElementById("RR")
var depot = document.getElementById("RD")
var montant = document.getElementById("txtMt")
var test = document.getElementById('test')
var list = document.getElementById("ul1")
var operation = null

for (var i=0;i<infos.length; i++){
    test.innerHTML = test.innerHTML + '<option value="'+i+'">'+ infos[i]["NumCpt"] + '</option>'
}
function afficher(){
    i = test.value
        num.innerHTML=infos[i]["NumCpt"];
        client.innerHTML=infos[i]["NomCli"];
        solde.innerHTML=infos[i]["Solde"];
}

function calculer(){
    if (retrait.checked==true){
        infos[i]["Solde"]+=eval(montant.value);
        operation = "Retrait"
    }
    else{
        infos[i]["Solde"]-=eval(montant.value);
        operation = "Depot"
    }
    list.innerHTML +=('<li>'+operation+' de '+montant.value+'DH du compte '+infos[i]["NumCpt"]+' Nouveau Solde : '+infos[i]["Solde"]+'DH</li>')
}