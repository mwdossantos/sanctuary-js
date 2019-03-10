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

var groups = [];

// Class decleration for a Dinosaur
class Dinosaur {
    constructor (diet) {
        this.diet = diet;
        this.name = this.pickRandomDinosaur();
        this.stats = this.generateStats();
        this.health = 100;
        this.thirst = 100;
        this.sleep = 100;
    }

    pickRandomDinosaur () {
        if (this.diet == 'Herbivore') {
            return herbivore[Math.floor(Math.random() * herbivore.length)];
        } else {
            return carnivore[Math.floor(Math.random() * carnivore.length)];
        }
    }

    generateStats () {
        
        return {
            attack: Math.floor(Math.random() * 100) + 50,
            defense: Math.floor(Math.random() * 100) + 60,
        }
    }
}

class Group {

    constructor () {
        this.dinosaurs = this.generateGroup();
    }

    generateGroup() {

        var group = [];

        for (let i = 0; group.length < 5; i++) {

            var groupMember = new Dinosaur('Herbivore');
            
            // checks if the next group member already exists in the group, adds if it doesn't exist
            if (!checkIfExists(group, groupMember)) {
                group.push(groupMember);
            }
    
        }

        return group;
    }

    listGroup () {
        return this.dinosaurs;
    }
}

/** this function checks if the item to be added to an array already exists
 * @param {*} group 
 * @param {Dinosaur} dinosaur 
 */
function checkIfExists(group, dinosaur) {

    for (let i = 0; i < group.length; i++) {
        if (group[i].name == dinosaur.name) {
            return true;
        }
    }
    return false;
}

const group = new Group();

console.log(group.listGroup());