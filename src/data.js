export const getData = (data) => {
};
export const filterByRole = (rolChoice, allData) =>{
    return allData.filter(campeon => campeon.tags.includes(rolChoice))
};

export const sortByDifficulty = (difficultyChoice, allData) =>{
    return allData.sort(function (a,b){return a-b;})
};


export const soSelecFunc = (newData, sortSelected) => {
    //let newData1 = [...newData] /*??????*/
    
    if (sortSelected === 'sortA'){
        const sortedCharA = newData.sort((a, b) => {
            if (a.diffId < b.diffId) return -1;
            return 1;
        });
        console.log(sortedCharA)
        return showCards1(sortedCharA);
    }
    
    else if (sortSelected === 'sortD') {
        const sortedCharD = newData.sort((a, b) => {
            if (a.diffId < b.diffId) return 1;
            return -1;
        });
        
    }
    
}
