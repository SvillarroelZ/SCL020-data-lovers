import { getData, filtrarPorRol} from './data.js';
import data from "./data/lol/lol.js";
//console.log(data.data) // muestra todos los objetos por nombre de cada campeon
//getData(data);//que hace esto?
const saveData = data; // toda la data
//console.log(saveData) // toda la data, incluye: data, format, type, version
const allData = Object.values(saveData.data); // toda la data como array| const allCards = Array.from(new Set(allData)); console.log(allCards);
//console.log(allData);
//console.log(allData[i]) // imprime el primer objeto, de posicion 0 dentro del array allData
//console.log(allData[0].info);// toda la info de la primera posicion
//console.log(allData.name);//undefined

const element = document.getElementById("showBtn");
element.addEventListener("click", mostrar);

function mostrar() {
  document.getElementById("cards").style.display = "block";
}
/*
-Acceder a la data como array para poder iterar sobre ella
-Almacenar solo cierta parte de esa data en variables (nombres en una constante, hay que hacer lo mismo con names, tags, img, splash, info, difficulty)
-Armar tarjeta con create element
*/

/*Variables que contienen cierta data para mostrar en tarjeta(MOSTRAR TODOS, MOSTRAR CADA TARJETA)*/

//const champ = filtrarPorRol(input.value, DATA)

// const allNames = allData.map(element => element.name); //
// const everyName = Array.from(new Set(allNames));
// //console.log(everyName); //muestra todos los nombres de los champs

// const allImg = allData.map(element => element.img);
// const everyImg = Array.from(new Set(allImg));
// //console.log(everyImg)

// const allSplash = allData.map(element => element.splash);
// const everySplash = Array.from(new Set(allSplash));
// //console.log(everySplash)

// const allInfo = allData.map(element => element.info); //
// const everyInfo = Array.from(new Set(allInfo));
// //console.log(everyName);

// const allDifficulty = allData.map(element => element.difficulty); //
// const everyDifficulty = Array.from(new Set(allDifficulty));
// //console.log(everyName);

/*Introducir la data que tenemos en una tarjeta*/

//const tarjetas = document.getElementById("cards"); //id del div donde vamos a meter el p creado
// const divCards = document.createElement("p"); // el parrafo que estamos creando para meter la info
//tarjetas.appendChild(divCards); // creando un "p" al id "cards".
// divCards.innerHTML= everyName; // muestra los nombres en el p creado

const showCards = () => {

    for(let i=0; i<allData.length; i++){
  
    let div0 = document.getElementById("cards");
    let divCards0 = document.createElement("div");
    div0.appendChild(divCards0);
    divCards0.setAttribute("class", "div0");

    //let div1 = document.getElementById("cards");
    let div1 = document.createElement("div");
    divCards0.appendChild(div1);
    div1.setAttribute("class", "div1");

    let splash = document.createElement("img");
    div1.appendChild(splash);
    splash.src = allData[i].splash;
    splash.setAttribute("class", "splashCard");  
    
    //let div2 = document.getElementById("cards");
    let div2 = document.createElement("div");
    divCards0.appendChild(div2);
    div2.setAttribute("class", "div2");

    let div3 = document.createElement("div");
    div2.appendChild(div3);
    div3.setAttribute("class", "div3");

    let image = document.createElement("img");
    div3.appendChild(image);
    image.src = allData[i].img;
    image.setAttribute("class", "iconImage");   

    let names = document.createElement("h3");
    div3.appendChild(names);
    names.innerHTML =allData[i].name;
    names.setAttribute("class", "nameCard");  

    let div4 = document.createElement("div");
    div2.appendChild(div4);
    div4.setAttribute("class", "div4");

    //let info = document.createElement("p");
    //div4.appendChild(info);
    //info.innerHTML=allData[i].name.info;
    //info.setAttribute("class", "infoCard");  

    let attack = document.createElement("p");
    div4.appendChild(attack);
    attack.innerHTML=`Ataque: ${allData[i].info.attack}`;
    attack.setAttribute("class", "attackCard");  

    let defense = document.createElement("p");
    div4.appendChild(defense);
    defense.innerHTML=`Defensa: ${allData[i].info.defense}`;
    defense.setAttribute("class", "defenseCard");  

    let magic = document.createElement("p");
    div4.appendChild(magic);
    magic.innerHTML=`Magia: ${allData[i].info.magic}`;
    magic.setAttribute("class", "magicCard");  

    let diff = document.createElement("p");
    div4.appendChild(diff);
    diff.innerHTML = `Dificultad: ${allData[i].info.difficulty}`;
    diff.setAttribute("class", "diffCard")  
    console.log("cards")
  }
}
showCards();       

/* filtrar por rol*/


let selectRoles= document.querySelectorAll("input[name='cRol']").forEach((input) => {
  input.addEventListener('change',() => {
    if(input.checked){
      const champs = filtrarPorRol(input.value, allData)
      console.log(champs);
    }
    
  })
});


//console.log(roles);// devuelve los assa

// function selectRol(){
//   const rolChoice = document.getElementsByClassName("rButton");
//   let dataRolChoice = [];

//   for(let i=0; i< rolChoice.length; i++){
//     if (rolChoice[i] == true){
//       dataRolChoice.push(rolChoice[i]);
//     }
//   }
// }


/* */
// function btnShowAll(){
//   const showAll = document.getElementById("btnSA");
//   let dataShowAll=[];
  
//   for(let i=0; i< showAll.length; i++){
//     if (showAll[i] ==true){
//       dataShowAll.push(showAll[i]);
//     }
//   }
// }

/*Mostrar y esconder info de campeón segun radio buton que el usuario seleccione*/

const eventoClickAssassin = document.getElementById("assassin");
eventoClickAssassin.addEventListener("click", mostrarAssassin,);

function mostrarAssassin(){
  document.getElementById("div-assassin").style.display="block";
  document.getElementById("div-fighter").style.display="none";
  document.getElementById("div-mage").style.display="none";
  document.getElementById("div-marksman").style.display="none";
  document.getElementById("div-support").style.display="none";
  document.getElementById("div-tank").style.display="none";  
}


const eventoClickFighter = document.getElementById("fighter");
eventoClickFighter.addEventListener("click", mostrarFighter);

function mostrarFighter(){
  document.getElementById("div-assassin").style.display="none";
  document.getElementById("div-fighter").style.display="block";
  document.getElementById("div-mage").style.display="none";
  document.getElementById("div-marksman").style.display="none";
  document.getElementById("div-support").style.display="none";
  document.getElementById("div-tank").style.display="none";  
}


const eventoClickMage = document.getElementById("mage");
eventoClickMage.addEventListener("click", mostrarMage);

function mostrarMage(){
  document.getElementById("div-assassin").style.display="none";
  document.getElementById("div-fighter").style.display="none";
  document.getElementById("div-mage").style.display="block";
  document.getElementById("div-marksman").style.display="none";
  document.getElementById("div-support").style.display="none";
  document.getElementById("div-tank").style.display="none";  
}


const eventoClickMarksman = document.getElementById("marksman");
eventoClickMarksman.addEventListener("click", mostrarMarksman);

function mostrarMarksman(){
  document.getElementById("div-assassin").style.display="none";
  document.getElementById("div-fighter").style.display="none";
  document.getElementById("div-mage").style.display="none";
  document.getElementById("div-marksman").style.display="block";
  document.getElementById("div-support").style.display="none";
  document.getElementById("div-tank").style.display="none";  
}


const eventoClickSupport = document.getElementById("support");
eventoClickSupport.addEventListener("click", mostrarSupport);

function mostrarSupport(){
  document.getElementById("div-assassin").style.display="none";
  document.getElementById("div-fighter").style.display="none";
  document.getElementById("div-mage").style.display="none";
  document.getElementById("div-marksman").style.display="none";
  document.getElementById("div-support").style.display="block";
  document.getElementById("div-tank").style.display="none";  
}


const eventoClickTank = document.getElementById("tank");
eventoClickTank.addEventListener("click", mostrarTank);

function mostrarTank(){
  document.getElementById("div-assassin").style.display="none";
  document.getElementById("div-fighter").style.display="none";
  document.getElementById("div-mage").style.display="none";
  document.getElementById("div-marksman").style.display="none";
  document.getElementById("div-support").style.display="none";
  document.getElementById("div-tank").style.display="block";  
}