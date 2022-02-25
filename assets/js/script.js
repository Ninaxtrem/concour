
class Joueur {constructor(name, nb_victoires){
    this.name = name; this.nb_victoires = nb_victoires; this.rang = null;
}}

class ScoreList {constructor(name, list){
    this.name = name; this.list = list;
}}

var AllScoreList = [
    new ScoreList("PVP", [new Joueur("Orange", 37), new Joueur("Pomme", 18), new Joueur("Ananas",6), new Joueur("Banane", 5), new Joueur("Yannis", 2)]),
    new ScoreList("CONSTRUCTION", [new Joueur("Orange", 37), new Joueur("Pomme", 18)]),
    new ScoreList("SPLEEF", [new Joueur("PATRICK", 68), new Joueur("Banane", 5), new Joueur("Yannis", 2)]),
    new ScoreList("DISCO DANCE", [new Joueur("Arbre vert", 97), new Joueur("Sabrine", 18), new Joueur("Ananas",6), new Joueur("Banane", 5), new Joueur("Yannis", 2), new Joueur("Yannis", 2)])

];


var tablescore = document.getElementById("tablescore");
var firstLine = document.createElement("div");

updateTableauScore(0);

function updateTableauScore(valuee){

tablescore.innerHTML = ""

    tablescore.appendChild(firstLine);
    tablescore.style.width = "50%";
    tablescore.style.backgroundColor = "blue";
    tablescore.style.maxWidth = "500px";
    tablescore.style.borderRadius = "0px"
    tablescore.style.overflow = "hidden"
    firstLine.style.width = "100%";
    firstLine.style.height = "50px";
    firstLine.style.backgroundColor = "#388e48";
    firstLine.style.display = "flex";
    firstLine.style.alignItems = "center";
    firstLine.style.position = "relative";
    
        var divScoreImg = document.createElement("div");
        divScoreImg.style.position = "absolute";
        divScoreImg.style.width = "28px";
        divScoreImg.style.height = "40px";
        divScoreImg.style.marginLeft = "72%";
        divScoreImg.style.marginTop = "10px";
        divScoreImg.style.backgroundSize = "contain";
        divScoreImg.style.backgroundRepeat = "no-repeat";
        divScoreImg.style.backgroundImage = "url(/assets/img/trophee.png)"
    
        var divRangImg = document.createElement("div");
        divRangImg.style.position = "absolute";
        divRangImg.style.width = "60px";
        divRangImg.style.height = "40px";
        divRangImg.style.marginLeft = "84%";
        divRangImg.style.marginTop = "20px";
        divRangImg.style.backgroundSize = "contain";
        divRangImg.style.backgroundRepeat = "no-repeat";
        divRangImg.style.backgroundImage = "url(/assets/img/podium.png)"
    
        var divGamename = document.createElement("div");
        divGamename.innerText = AllScoreList[valuee].name;
        divGamename.style.marginLeft = "5%"
        divGamename.style.fontSize = "20px"
        divGamename.style.color = "#4c5158";
    
        firstLine.appendChild(divScoreImg);
        firstLine.appendChild(divRangImg);
        firstLine.appendChild(divGamename);
    for (var i = 0; i < AllScoreList[valuee].list.length; i++) {
        var joueurLine = document.createElement("div");
        joueurLine.style.width = "100%";
        joueurLine.style.height = "65px";
        joueurLine.style.backgroundColor = "white";
        joueurLine.style.display = "flex";
        joueurLine.style.alignItems = "center";
    
        var divPhoto = document.createElement("div");
        divPhoto.style.backgroundColor = "grey"
        divPhoto.style.backgroundImage = "url(/assets/img/head.png)"
        divPhoto.style.backgroundRepeat = "no-repeat";
        divPhoto.style.backgroundSize = "contain"
        divPhoto.style.height = "40px";
        divPhoto.style.width = "40px";
        divPhoto.style.marginRight = "10px";
        divPhoto.style.marginLeft = "20px";
    
        var divName = document.createElement("div");
        divName.innerText = AllScoreList[valuee].list[i].name;
        divName.style.color = "#4c5158";
    
        
        var divScore = document.createElement("div");
        divScore.style.position = "absolute";
        divScore.style.marginLeft = "37%";
        divScore.innerText = AllScoreList[valuee].list[i].nb_victoires;
        divScore.style.color = "#4c5158";
    
        var divRang = document.createElement("div");
        divRang.style.position = "absolute";
        divRang.style.marginLeft = "45%";
        divRang.innerText = i+1;
        divRang.style.color = "#4c5158";
    
        joueurLine.appendChild(divPhoto)
        joueurLine.appendChild(divName)
        joueurLine.appendChild(divScore)
        joueurLine.appendChild(divRang)
    
        tablescore.appendChild(joueurLine);
    }
    
}
