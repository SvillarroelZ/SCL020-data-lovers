import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { TestWatcher } from 'jest';
import { filterByRole, soSelecFunc, } from '../src/data.js';

let sortedA = {
  Aatrox: {
    name: "Aatrox",
    info: {attack: 8, defense: 4, magic: 3, difficulty: 4},
    tags: ["Fighter", "Tank"],
  },
  Ahri: {
    name: "Ahri",
    info: {attack: 3, defense: 4, magic: 8, difficulty: 5},
    tags: ["Mage", "Assassin"],
  },
  Akali: {
    name: "Akali",
    info: {attack: 5, defense: 3, magic: 8, difficulty: 7},
    tags: ["Assassin"],
  },
} 
const sortA = Object.values(sortedA)
let sortedD = {
  Akali: {
    name: "Akali",
    info: {attack: 5, defense: 3, magic: 8, difficulty: 7},
    tags: ["Assassin"],
  },
  Ahri: {
    name: "Ahri",
    info: {attack: 3, defense: 4, magic: 8, difficulty: 5},
    tags: ["Mage", "Assassin"],
  },
  Aatrox: {
    name: "Aatrox",
    info: {attack: 8, defense: 4, magic: 3, difficulty: 4},
    tags: ["Fighter", "Tank"],
  },
} 
const sortD = Object.values(sortedD)
let saveData = {
  Aatrox: {
    name: "Aatrox",
    info: {attack: 8, defense: 4, magic: 3, difficulty: 4},
    tags: ["Fighter", "Tank"],
  },
  Ahri: {
    name: "Ahri",
    info: {attack: 3, defense: 4, magic: 8, difficulty: 5},
    tags: ["Mage", "Assassin"],
  },
  Akali: {
    name: "Akali",
    info: {attack: 5, defense: 3, magic: 8, difficulty: 7},
    tags: ["Assassin"],
  },
} 

const allData = Object.values(saveData)

/////////
describe("test for filterbyRole", () => {
  it("test if it's a function", () => {
    const rolChoice = "Assassin";
    const funrol = filterByRole(rolChoice, allData);
    expect(typeof filterByRole).toBe("function");//espera que filterByRole sea una funcion
    expect(funrol).toContain(allData[2]);//espera que el filtro por rol se aplique segun la eleccion del usuario
  });
})

describe("test for soSelecFunc", () => {
  it("test if it's a function", () => {
    const sortSelected= "sortA";
    const funsort = soSelecFunc(allData, sortSelected);
    expect(funsort).toEqual(sortA);
  });
  it("test if it's a function", () => {
    const sortSelected= "sortD";
    const funsort = soSelecFunc(allData, sortSelected);
    expect(funsort).toEqual(sortD);
  });
});
describe("test for soSelecFunc", () => {
  it("test if it's a function", () => {
    expect(typeof soSelecFunc).toBe("function");
  });
});

//////////