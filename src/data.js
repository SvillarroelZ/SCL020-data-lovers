export const filterByRole = (rolChoice, allData) =>{
    const filteredData= allData.filter(campeon => campeon.tags.includes(rolChoice))
    return filteredData
    //console.log(filteredData); 
};

export const soSelecFunc = (allData, sortSelected) => {

    if (sortSelected === 'sortA'){
        let sortedCharA= allData.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return -1;
            return 1;
        });
        return sortedCharA
        //console.log(sortedCharA)
        
    }

    else if (sortSelected === 'sortD') {
        let sortedCharD= allData.sort((a, b) => {
            if (a.info.difficulty < b.info.difficulty) return 1;
            return -1;
        });
        return sortedCharD
        //console.log(sortedCharD)
    }    
};
//console.log(soSelecFunc);