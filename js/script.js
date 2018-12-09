var herbivore = [
    "Stygimoloch", 
    "Sinoceratops", 
    "Ankylosaurus",
    "Brachiosaurus",
    "Apatosaurus",
    "Parasaurolophus",
    "Gallimimus",
    "Triceratops",
    "Stegosaurus"
];
var carnivore = [
    "Indoraptor", 
    "Carnotaurus", 
    "Mosasaurus",
    "Velociraptor",
    "Baryonyx",
    "Allosaurus",
    "Tyrannosaurus Rex",
    "Compsognathus"
];
// dinosaur data lists

function getDinosaur(diet, randomDinosaur) {

    randomDinosaur = diet[Math.floor(Math.random()*diet.length)];
    // get a random dinosaur from the dietary list

    return randomDinosaur;
    // return the random dinosaur for later use e.g. in the console

} // this function takes a diet and returns a random dinosaur with that diet

// this function takes dinosaurs from the getDinosaur function and adds 5 herbivores together. 
// carnivores will always be paired up if possible and if not they will be scattered around the
// sanctuary.

console.log(getDinosaur(carnivore));