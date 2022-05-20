import { getData, filterByRole, soSelecFunc} from './data.js';
import data from "./data/lol/lol.js";
//console.log(data.data) // muestra todos los objetos por nombre de cada campeon
//getData(data);//que hace esto?
const saveData = data; // toda la data
//console.log(saveData) // toda la data, incluye: data, format, type, version
const allData = Object.values(saveData.data); // toda la data como array| const allCards = Array.from(new Set(allData)); console.log(allCards);


 /* Funcion mostrar ordenado según dificultad */ 

function showSort(){

    let resultArr = [];
    let arrDiff = allData;
    resultArr.push(arrDiff);
    console.log(resultArr);
    
}
showSort();

/*Mostrando solo las tarjetas segun dificultad en el boton "mostrar por dificultad*/

// function mostrarCardDiv (){
//   const showSort = document.getElementById("showDiffSort");
//   showSort.addEventListener("click", diffSort)
// }

// const element1 = document.getElementById("showDiffSort"); //funcion del boton mostrar todos
// element1.addEventListener("click", showDiff);

// function mappedInfo () {
//   let mapInfo = allData.map(a_info => a_info.info);
//   return mapInfo;
// };

// function AUSILIO () {

//   let mapInfo = allData.map(a_info => a_info.info);
//   let arrInfoMapeada = []
//   for(let i=0; i < mapInfo.length; i++){

//   let infoMapeada = mapInfo[i].difficulty;
//   arrInfoMapeada.push(infoMapeada)
  
//   }
//  return
// }
// AUSILIO() 

// function sortearInfo (arrInfoMapeada){
//   for(let i=0; i < i.diffId; i++){
//     let sor= i.sort(a, b) {
//     return a - b;
//   })
// }
// }
// sortearInfo()

//////////////***********////////////********** */ */



//   let diffSorted = resultArr.sort( (a, b) => {
//           if (a.diffId > b.diffId){
//             return 1;
//           }
//           if (a.diffId > b.diffId){
//             return -1;
//           }
//           return 0;
//         });
//         console.log(diffSorted)




////////////******///////////*********////////////*****//////////////***********//////////////

/* Mostrar todas las tarjetas en el botón "mostrar todos" */

const element = document.getElementById("showBtn");
element.addEventListener("click", showAll);

function showAll() {
    showCards(allData);
}


/* Show by ascending Dificulty */

const selectSort = document.getElementById('sort-select');
selectSort.addEventListener ('change', () => {
    let sortSelected = selectSort.value;
    let soResults = soSelecFunc(allData, sortSelected);
    showCards1(soResults)
});

// function showCards1(soResults) {
//   document.getElementById("diffCards").style.display = "none";
//   document.getElementById("diffCards").innerHTML = ""
//   console.log(soResults)
//   for(let i=0; i < soResults.length; i++){

//     let diff0 = document.getElementById("diffCards");
//     let diffCards0 = document.createElement("div");
//     diff0.appendChild(diffCards0);
//     diffCards0.setAttribute("class", "diff0"); //div0 es el contenedor de la tarjeta
//     diffCards0.setAttribute("tags", soResults[i].tags); //Unimos los roles a la tarjeta
//     let diff1 = document.createElement("div");//creamos el div para el img splash
//     diffCards0.appendChild(diff1);
//     diff1.setAttribute("class", "diff1");
//     let splash = document.createElement("img");
//     div1.appendChild(splash);
//     splash.src = soResults[i].splash;
//     splash.setAttribute("class", "splashCard");  
 
//     let diff2 = document.createElement("div");//contenedor de img icono titulo e info
//     diffCards0.appendChild(diff2);
//     diff2.setAttribute("class", "diff2");
//     let diff3 = document.createElement("div");//contenedor de img icono y titulo
//     diff2.appendChild(diff3);
//     diff3.setAttribute("class", "diff3");
//     let image1 = document.createElement("img");
//     diff3.appendChild(image1);
//     image1.src = soResults.img;
//     image1.setAttribute("class", "iconImage");   
//     let names1 = document.createElement("h3");
//     diff3.appendChild(names1);
//     names1.innerHTML =soResults.name;
//     names1.setAttribute("class", "nameCard");  
//     let diff4 = document.createElement("div");// Contenedor de info
//     diff2.appendChild(diff4);
//     diff4.setAttribute("class", "diff4");
//     let diff = document.createElement("p");
//     diff4.appendChild(diff);
//     diff.innerHTML = `Dificultad: ${soResults.diffId}`;
//     diff.setAttribute("class", "diffCard")  
 
//   }
//   document.getElementById("diffCards").style.display = "block";
// }


// const btnDifficulty = document.getElementById("ascending");
// btnDifficulty.addEventListener("click", sortDifficulty(btnDifficulty.value))

// function sortDifficulty(difficulty) {
//     let filteredData = sortByDifficulty(difficulty, allData);
//     showCards(filteredData);
// }

/**
 * Muestra las tarjetas correspondientes al rol
 * 
 *role para filtrar las tarjetas
 */

// function showByRole(role) {
  
//   document.getElementById("cards").style.display = "block"; // muestra todas las tarjetas
//   let html_cards = Array.from(document.querySelectorAll(".div0")) // Muestra los elementos de la clase div0 con el tag que coincide con uno de los roles.

//   let active_html_cards = html_cards.filter(element => element.attributes.getNamedItem("tags").value.includes(role)) // getNamedItem(); método que devuelve un atributo del nodo desde el objeto
//   active_html_cards.forEach(element => element.style.display = "flex")

//   let inactive_html_cards = html_cards.filter(element => !element.attributes.getNamedItem("tags").value.includes(role))
//   inactive_html_cards.forEach(element => element.style.display = "none")
// }

/*Introducir la data que tenemos en una tarjeta*/

//const tarjetas = document.getElementById("cards"); //id del div donde vamos a meter el p creado
// const divCards = document.createElement("p"); // el parrafo que estamos creando para meter la info
//tarjetas.appendChild(divCards); // creando un "p" al id "cards".
// divCards.innerHTML= everyName; // muestra los nombres en el p creado

function showCards(champions) {
    document.getElementById("cards").style.display = "none";
    document.getElementById("cards").innerHTML = ""
    for(let i=0; i < champions.length; i++){
    
      let div0 = document.getElementById("cards");
      let divCards0 = document.createElement("div");
      div0.appendChild(divCards0);
      divCards0.setAttribute("class", "div0"); //div0 es el contenedor de la tarjeta
      divCards0.setAttribute("tags", champions[i].tags); //Unimos los roles a la tarjeta

      let div1 = document.createElement("div");//creamos el div para el img splash
      divCards0.appendChild(div1);
      div1.setAttribute("class", "div1");

      let splash = document.createElement("img");
      div1.appendChild(splash);
      splash.src = champions[i].splash;
      splash.setAttribute("class", "splashCard");  
      
      let div2 = document.createElement("div");//contenedor de img icono titulo e info
      divCards0.appendChild(div2);
      div2.setAttribute("class", "div2");

      let div3 = document.createElement("div");//contenedor de img icono y titulo
      div2.appendChild(div3);
      div3.setAttribute("class", "div3");

      let image = document.createElement("img");
      div3.appendChild(image);
      image.src = champions[i].img;
      image.setAttribute("class", "iconImage");   

      let names = document.createElement("h3");
      div3.appendChild(names);
      names.innerHTML =champions[i].name;
      names.setAttribute("class", "nameCard");  

      let div4 = document.createElement("div");// Contenedor de info
      div2.appendChild(div4);
      div4.setAttribute("class", "div4");

      let attack = document.createElement("p");
      div4.appendChild(attack);
      attack.innerHTML=`Ataque: ${champions[i].info.attack}`;
      attack.setAttribute("class", "attackCard");  

      let defense = document.createElement("p");
      div4.appendChild(defense);
      defense.innerHTML=`Defensa: ${champions[i].info.defense}`;
      defense.setAttribute("class", "defenseCard");  

      let magic = document.createElement("p");
      div4.appendChild(magic);
      magic.innerHTML=`Magia: ${champions[i].info.magic}`;
      magic.setAttribute("class", "magicCard");  

      let diff = document.createElement("p");
      div4.appendChild(diff);
      diff.innerHTML = `Dificultad: ${champions[i].info.difficulty}`;
      diff.setAttribute("class", "diffCard")  
      //console.log("cards")
    }
    document.getElementById("cards").style.display = "block";
}
showCards(allData);       

/* filtrar por rol según el input value que aprete el usuario*/

let selectRoles= document.querySelectorAll("input[name='cRol']").forEach((input) => {
  input.addEventListener('change',() => {
    if(input.checked){
      //console.log(input.value);
      let champions = filterByRole(input.value, allData)
      console.log(champions);
      //showByRole(input.value);
      showCards(champions);
    }
    
  })
});

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