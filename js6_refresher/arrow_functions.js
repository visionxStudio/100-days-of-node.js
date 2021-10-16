function nyFunc() { }


// Arrow function 


const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

// To get the length of material
console.log(materials.map(material => material.length));


// printMyName("Manish") 
// Will throw cannot access 'printMyName' before initialization

const printMyName = (myName) => {
    console.log(myName);
}


printMyName("Manish")
