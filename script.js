const herbivore = [
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

const carnivore = [
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

// public vars
var health = 100;
var hunger = 100;
var thirst = 100;
var sleep = 100;
var attack = ;
var defense = ;
var dead = false;

function getDinosaur(diet) {

    var randomDinosaur = diet[Math.floor(Math.random() * diet.length)];
    // get a random dinosaur from the dietary list

    return randomDinosaur;
    // return the random dinosaur for later use e.g. in the console

}
// this function takes a diet and returns a random dinosaur with that diet

function createFamily() {

    var family = [];
    // declare the family array

    for (i = 0; family.length < 5; i++) {

        var familyMember = getDinosaur(herbivore);

        if (!checkIfExists(family, familyMember)) {
            family.push(familyMember);
        }
        // checks if the next family member already exists in the family, adds if it doesn't exist

    }

    return family;
    // return the family for later use e.g. in the console

}
// this function creates a family of 5 herbivores

function checkIfExists(array, item) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == item) {
            return true;
        }

    }

    return false;
    
}
// this function checks if the item to be added to an array already exists

function calculateScore(params) {
    
}

console.log(createFamily())