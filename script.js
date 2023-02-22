const infos=[
    {"NumCpt":"01234","CINCli":"A121212","NomCli":"ALAMI Mohammed","Solde":5000},
    {"NumCpt":"56789","CINCli":"A989898","NomCli":"SABIR Laila","Solde":10000}
]
var num = document.getElementById("num")
var client = document.getElementById("client")
var solde = document.getElementById("solde")
var ul = document.getElementById('ul1')
var retrait = document.getElementById("RR")
var depot = document.getElementById("RD")
var montant = document.getElementById("txtMt")
var test = document.getElementById('test')
var a = 5
for (var i=0;i<infos.length; i++){
    test.innerHTML = test.innerHTML + '<option value="'+i+'">'+ infos[i]["NumCpt"] + '</option>'
}
function afficher(){
    if (test.options[1].selected==true){
        num.innerHTML=infos[0]["NumCpt"];
        client.innerHTML=infos[0]["NomCli"];
        solde.innerHTML=infos[0]["Solde"];
        }
        if (test.options[2].selected==true){
            num.innerHTML=infos[1]["NumCpt"];
            client.innerHTML=infos[1]["NomCli"];
            solde.innerHTML=infos[1]["Solde"];
            }
        
}
if (retrait.checked==true){
    solde.value = eval(solde.value) - eval(montant.value)
}
else{
    solde.value = eval(solde.value) + eval(montant.value)
}