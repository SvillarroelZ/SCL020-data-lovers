import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { TestWatcher } from 'jest';
import { filterByRole, soSelecFunc } from '../src/data.js';

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
    expect(typeof filterByRole).toBe("function");
  });
});

describe("test for soSelecFunc", () => {
  it("test if it's a function", () => {
    expect(typeof soSelecFunc).toBe("function");
  });
});



//////////


describe('Función que filtra la data, para obtener los roles', () => {

  it('Filter function', () => {
    

  const rol = "Assassin"
  const resultRol = { 
    Ahri: {
    name: "Ahri",
    tags: ["Mage", "Assassin"],
  },
    Akali: {
    name: "Akali",
    tags: ["Assassin"],
  }, 

}
  let filtered = filterByRole (allData, rol)
    expect(filtered).toEqual(resultRol);
    
});





});
