const random = require('random');
const helpers = require('./helpers');

const dinosaurs = [
    "Stygimoloch",
    "Sinoceratops",
    "Ankylosaurus",
    "Brachiosaurus",
    "Apatosaurus",
    "Parasaurolophus",
    "Gallimimus",
    "Triceratops",
    "Stegosaurus",
    "Indoraptor",
    "Carnotaurus",
    "Mosasaurus",
    "Velociraptor",
    "Baryonyx",
    "Allosaurus",
    "Tyrannosaurus Rex",
    "Compsognathus"
];

const worldBounds = {
    x: {
        min: 0,
        max: 100,
    },
    y: {
        min: 0,
        max: 100,
    }
}
var groups = [];

// Class declaration for a Dinosaur
class Dinosaur {

    constructor(id) {
        this.name = `${id.toString()} ${this.pickRandomDinosaur()}`;
        this.id = id;
        this.stats = this.generateStats();
        this.health = 100;
        this.thirst = 100;
        this.sleep = 100;
        this.x = random.int(0, 100);
        this.y = random.int(0, 100);

        this.init();
    }

    init() {
        setInterval(() => {
            this.move();
        }, 50);
    }

    // pick a random dinosaur with the given diet
    pickRandomDinosaur() {
        return dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
    }

    // generate the attack and defense stats for the dinosaur
    generateStats() {

        return {
            attack: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
            defense: Math.floor(Math.random() * (100 - 70 + 1)) + 70,
        }
    }

    async move() {

        var directions = {
            right: true,
            left: true,
            up: true,
            down: true,
        }

        if (this.x == worldBounds.x.max) {
            directions.right = false;
        }

        if (this.x == worldBounds.x.min) {
            directions.left = false;
        }

        if (this.y == worldBounds.y.max) {
            directions.up = false;
        }

        if (this.y == worldBounds.y.min) {
            directions.down = false;
        }
        // this.getDirection(directions)
        const dir = this.getDirection(directions);

        switch (dir) {
            case 'up':
                this.y++;
                break;
            case 'down':
                this.y--;
                break;
            case 'right':
                this.x++;
                break;
            case 'left':
                this.x--;
                break;
            default:
                break;
        }

    }

    getDirection(directions) {
        var tempArray = [
            {
                direction: 'right',
                status: directions.right
            },
            {
                direction: 'left',
                status: directions.left
            },
            {
                direction: 'up',
                status: directions.up
            },
            {
                direction: 'down',
                status: directions.down
            },
        ];

        tempArray = helpers.Shuffle(tempArray);

        for (let i = 0; i < tempArray.length; i++) {

            if (tempArray[i].status == true && random.boolean()) {
                return tempArray[i].direction;
            }
        }
    }

    kill () {
        
    }
}

// Create a group of 5 from dinosaurs created with the Dinosaur class
class Group {

    constructor(name) {
        this.name = name;
        this.dinosaurs = this.generateGroup();
    }

    // generate the group and check if the member doesn't exist, if not, add it
    generateGroup() {

        var group = [];

        for (let i = 0; group.length < 100; i++) {

            var groupMember = new Dinosaur(group.length + 1);
            group.push(groupMember);

        }

        return group;

    }

}

/** this function checks if the item to be added to an array already exists
 * @param {*} group 
 * @param {Dinosaur} dinosaur 
 */
function checkIfExists(group, dinosaur) {

    for (let i = 0; i < group.length; i++) {
        if (group[i].name == dinosaur.name) {
            console.log('exists')
            return true;
        }
    }
    return false;
}

var updateInterval;

function terminateProcess() {

    console.warn("Stopping process...");
    setTimeout(() => {
        clearInterval(updateInterval);
    }, 2000);
}


function update() {

    updateInterval = setInterval(() => {
    }, 1);
}


function start() {

    checkIfCollide();
    groups.push(new Group("dinos"));
    update();

}

function checkIfCollide () {
    
    setInterval(() => {
        var group = returnGroup('dinos');

        for (let i = 0; i < group.dinosaurs.length; i++) {
            var dino = group.dinosaurs[i];
            for (let z = 0; z < group.dinosaurs.length; z++) {
                if (dino.x == group.dinosaurs[z].x && dino.y == group.dinosaurs[z].y) {
                    if (dino.name != group.dinosaurs[z].name) {
                        console.log('same spot', dino.name,group.dinosaurs[z].name )
                    }
                }
            }
        }
    }, 50);

}

function returnGroup (groupName) {
    for (let i = 0; i < groups.length; i++) {
        if (groups[i].name == groupName) {
            return groups[i];
        }
    }
}
start();