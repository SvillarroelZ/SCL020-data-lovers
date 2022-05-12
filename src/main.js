import { getData } from './data.js';
import data from "./data/lol/lol.js";
//console.log(data.data)
getData(data);
const saveData = data; // todos la data
//console.log(saveData) // toda la data, incluye: data, format, type, version
const allData = Object.values(saveData.data); // toda la data como array. 
//console.log(allData); // muestra por posicion (array).
//console.log(allData[i]) // imprime el primer objeto, de posicion 0 dentro del array allData
//console.log(allData[0].info);

const allChamp= Object.entries(allData).forEach(par =>{
  const clave = par[0];
  const valor = par[1];
  
  //console.log(allData[clave])
  ////console.log(allData[valor])
})

const tarjetas = document.getElementById("cards"); //id del div donde vamos a meter el p creado
const divCards = document.createElement("p"); // el parrafo que estamos creando para meter la info
tarjetas.appendChild(divCards); // creando un "p" al id "cards".


//const allCard=allData.map(element=>element.allData);
//const allRoles = allData.map(element => element.tags); //
  //const everyRoles = Array.from(new Set(allRoles));
  //console.log(everyRoles);

  const getNames = (allData) => {
    const names = allData.map((i) => i.name);
    let onlyNames = [];
    names.forEach((name) => {
      if (!onlyNames.includes(name)) {
        onlyNames.push(name);
      }
    });
    //console.log(getNames);
    return onlyNames;
    
  };
//console.log(allData.'name');

const allNames = allData.map(element => element.name); //
  const everyName = Array.from(new Set(allNames));
  //console.log(everyNames);


  function showCard(){
    
  }


const allCards = Array.from(new Set(allData));
//console.log(allCards)

divCards.innerHTML= allCards;

//console.log(allCards);


function selectRol(){
  const rolChoice = document.getElementsByClassName("rButton");
  let dataRolChoice = [];

  for(let i=0; i< rolChoice.length; i++){
    if (rolChoice[i] == true){
      dataRolChoice.push(rolChoice[i]);
    }
  }
}

function rolefilter(allData, ){
  
} 



let roles = allData.filter((campeon)=>{return campeon.tags.includes("Assassin")} ) 
//console.log(roles);


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