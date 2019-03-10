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

// Class declaration for a Dinosaur
class Dinosaur {

    constructor (diet) {
        this.diet = diet;
        this.name = this.pickRandomDinosaur();
        this.stats = this.generateStats();
        this.health = 100;
        this.thirst = 100;
        this.sleep = 100;
    }

    // pick a random dinosaur with the given diet
    pickRandomDinosaur () {
        if (this.diet == 'Herbivore') {
            return herbivore[Math.floor(Math.random() * herbivore.length)];
        } else {
            return carnivore[Math.floor(Math.random() * carnivore.length)];
        }
    }

    // generate the attack and defense stats for the dinosaur
    generateStats () {
        
        return {
            attack: Math.floor(Math.random() * 100) + 50,
            defense: Math.floor(Math.random() * 100) + 60,
        }
    }
}

// Create a group of 5 from dinosaurs created with the Dinosaur class
class Group {

    constructor () {
        this.dinosaurs = this.generateGroup();
    }

    // generate the group and check if the member doesn't exist, if not, add it
    generateGroup() {

        var group = [];

        for (let i = 0; group.length < 5; i++) {

            var groupMember = new Dinosaur('Herbivore');
            
            if (!checkIfExists(group, groupMember)) {
                group.push(groupMember);
            }
    
        }
        
        return group;

    }

    // list the newly made group of dinosaurs
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