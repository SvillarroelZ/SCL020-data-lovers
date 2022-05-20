import data from "./data/lol/lol.js";
export const getData = (data) => {
};

export const filterByRole = (rolChoice, allData) =>{
    return allData.filter(campeon => campeon.tags.includes(rolChoice))
};

export const soSelecFunc = (infoN, sortSelected) => {

    if (sortSelected === 'sortA'){
        const sortedCharA = infoN.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return -1;
            return 1;
        });
        //console.log(sortedCharA)
        
    }

    else if (sortSelected === 'sortD') {
        const sortedCharD = infoN.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return 1;
            return -1;
        });
        //console.log(sortedCharD)
    }
}

    /////////////////////////////////////

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

    });
    return newArr;
}
let infoN = normalizeInfo()
//console.log(infoN);