import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


//intento3
// function rolChoice() {
//      if(document.getElementById("assa").checked == true){
//          document.getElementById("assassin").style.display = 'block';
//          document.getElementById("fighter").style.display = 'none';
//          document.getElementById("marksman").style.display = 'none';
//          document.getElementById("mage").style.display = 'none';
//          document.getElementById("tank").style.display = 'none';
//          document.getElementById("support").style.display = 'none';
//      }
//  }
//   rolChoice();

//intento2
// function displayImage(rol) {
//   var imgs = document.querySelectorAll(".cRol > img");

//   for (var i = 0; i < imgs.length; i++) {
//       imgs[i].style.display = "none";
//   }
//   document.getElementById(id).style.display = "inline";
// }

//intento3

// var lastUnique;
// function displayImage(id, unique) {
//     var el = document.getElementById(id);

//     if (unique) {
//         if (lastUnique) {
//             lastUnique.style.display = 'none';
//         }

//         lastUnique = el;
//     }

//     el.style.display = 'block';
// }