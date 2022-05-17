export const getData = (data) => {
};
export const filterByRole= (rolChoice, allData) =>{
    let roles = allData.filter((campeon)=>{return campeon.tags.includes(rolChoice)} )
    return roles
  }

// export const DATA = (showAll, allData) =>{
//   let dataAll = allData.filter((campeones)=>{return campeones.data.includes(showAll)})
//   return dataAll
// }


  // for(let i = 0; i < saveData.lenght; i++){
  //   console.log(saveData[i].tags);
  // }

/*
export const
  const allRoles = data.map(element => element.tags);
  const everyRoles = Array.from(new Set(allRoles));
  console.log(data);

  const allcard=allData.map(element=>element.name);
  const everyNames = Array.from(new Set(allData));

  //console.log(everyNames);

  const image=data.map(element=>element.img);
  const everyImage = Array.from(new Set(image));

  //console.log(everyImage);

  const splashImage=data.map(element=>element.splash);
  const everySplashImage = Array.from(new Set(splashImage));

  //console.log(everySplashImage);

  const info=data.map(element=>element.info);
  const everyInfo = Array.from(new Set(info));

  //console.log(everyInfo);

  const difficulty=data.map(element=>element.difficulty);
  const everyDifficulty = Array.from(new Set(difficulty));

  //console.log(everyDifficulty);


  // return 'example'; 
  */



