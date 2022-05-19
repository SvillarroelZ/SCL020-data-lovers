export const getData = (data) => {
};
export const filterByRole = (rolChoice, allData) =>{
    return allData.filter(campeon => campeon.tags.includes(rolChoice))
};

export const sortByDifficulty = (difficultyChoice, allData) =>{
    return allData.sort(function (a,b){return a-b;})
};

