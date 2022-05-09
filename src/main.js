import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

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