export const filterByRole = (rolChoice, allData) =>{
    const filteredData= allData.filter(campeon => campeon.tags.includes(rolChoice))
    return filteredData
    console.log(filteredData); 
};

export const soSelecFunc = (allData, sortSelected) => {

    if (sortSelected === 'sortA'){
        allData.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return -1;
            return 1;
        });
        //console.log(sortedCharA)
        
    }

    else if (sortSelected === 'sortD') {
        allData.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return 1;
            return -1;
        });
        //console.log(sortedCharD)
    }    
};
//console.log(soSelecFunc);
