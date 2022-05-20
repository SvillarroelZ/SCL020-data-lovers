import data from "./data/lol/lol.js";
export const getData = (data) => {
};

export const filterByRole = (rolChoice, allData) =>{
    //let newArray = normalizeInfo(allData)//nani??
    return allData.filter(campeon => campeon.tags.includes(rolChoice))
};

// export const sortByDifficulty = (difficultyChoice, allData) =>{
//     return infoN.sort(function (a,b){return a-b;})
// };

////////////////lo que estaba en el pull que no se subio//////////////////////

export const soSelecFunc = (infoN, sortSelected) => {
    //let newData1 = [...newData] /*??????*/

    if (sortSelected === 'sortA'){
        const sortedCharA = infoN.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return -1;
            return 1;
        });
        console.log(sortedCharA)
        //return showCards1(sortedCharA);
    }

    else if (sortSelected === 'sortD') {
        const sortedCharD = infoN.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return 1;
            return -1;
        });
        console.log(sortedCharD)
        //return showCards1(sortedCharD);
        
    }
    
}
    /////////////////////////////////////


/////////////////lo que estaba en visual//////////////////////
//export const soSelecFunc = (newData, sortSelected) => {
//     //let newData1 = [...newData] /*??????*/
//     let sortedChars;
//     if (sortSelected === 'sortA'){
//         sortedChars = newData.sort((a, b) => {
//             if (a.diffId < b.diffId)
//                 return -1;
//             return 1;
//         });
//     }
    
//     else if (sortSelected === 'sortD') {
//         sortedChars = newData.sort((a, b) => {
//             if (a.diffId < b.diffId)
//                 return 1;
//             return -1;
//         });   
//     }  

//     return sortedChars;
// };
///////////////////////////////////////

function normalizeInfo() {
    let newArr= [];
    const allData_1 = Object.values(data.data);
    //console.log(data)
    allData_1.forEach(element => {
        newArr.push({
            attack: element.info.attack,
            defense: element.info.defense,
            magic: element.info.magic,
            difficulty: element.info.difficulty,
            img: element.img
        })

       // newArr.append(element)
    });
    return newArr;
}
let infoN = normalizeInfo()
//console.log(infoN);