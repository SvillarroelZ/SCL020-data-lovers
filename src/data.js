import data from "./data/lol/lol.js";
export const getData = (data) => {
};

export const filterByRole = (rolChoice, allData) =>{
    let newArray = normalizeInfo(allData)
    return newArray.filter(campeon => campeon.tags.includes(rolChoice))
};

export const sortByDifficulty = (difficultyChoice, allData) =>{
    return allData.sort(function (a,b){return a-b;})
};

export const soSelecFunc = (newData, sortSelected) => {
    //let newData1 = [...newData] /*??????*/
    let sortedChars;
    if (sortSelected === 'sortA'){
        sortedChars = newData.sort((a, b) => {
            if (a.diffId < b.diffId)
                return -1;
            return 1;
        });
    }
    
    else if (sortSelected === 'sortD') {
        sortedChars = newData.sort((a, b) => {
            if (a.diffId < b.diffId)
                return 1;
            return -1;
        });   
    }  

    return sortedChars;
};

function normalizeInfo() {
    let newArr= [];
    const allData = Object.values(data.data);
    //console.log(data)
    allData.forEach(element => {
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
console.log(infoN);