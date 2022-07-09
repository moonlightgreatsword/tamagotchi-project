// create a class for the pet
    // placeholder name

let enteredName = ""
const petName = document.querySelector("#name")
const petHunger = document.querySelector("#hunger")
const petSleepiness = document.querySelector("#sleepiness");
const petBoredom = document.querySelector("#boredom");
const petAge = document.querySelector("#age");
const foodButton = document.querySelector("#feed")
const lightSwitch = document.querySelector("#lights");
const playButton = document.querySelector("#play");

const updateHunger = () => {
    petHunger.innerText = `Hunger: ${pet.hunger}`;
}
const updateSleepiness = () => {
    petSleepiness.innerText = `Sleepiness: ${pet.sleepiness}`;
}
const updateBoredom = () => {
    petBoredom.innerText = `Boredom: ${pet.boredom}`;
}

const naming = () => {
    enteredName = document.querySelector("#pet-name").value
    console.log(enteredName)
    petName.innerText = enteredName
    game.openTheGame();
}

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
        this.getHungry = () => {
            this.hunger++;
            updateHunger();
        }
        this.getSleepy = () => {
            this.sleepiness++;
            updateSleepiness();
        }
        this.getBored = () => {
            this.boredom++;
            updateBoredom();
        }
        this.feed = () => {
            this.hunger -= 1;
            petHunger.innerText = `Hunger: ${this.hunger}`;
            console.log("Yum yum yum!")
        }
        this.play = () => {
            this.boredom -= 1;
            petBoredom.innerText = `Boredom: ${this.boredom}`;
            console.log("Whee!")
        }
    }
}

const startButton = document.getElementById("start")
const petNameField = document.querySelector("#pet-name")

// instantiate the pet class
    // placeholder name

// object for the game
    // key value for lights
    // function to turn lights on/off

const game = {
    lightsOn: true,
    openTheGame: () => {
        // https://www.javascripttutorial.net/javascript-dom/javascript-form/
        const pet = new Tamagotchi(`${startButton.elements["pet-name"].value}`);
        petHunger.innerText = `Hunger: ${pet.hunger}`;
        petSleepiness.innerText = `Sleepiness: ${pet.sleepiness}`;
        petBoredom.innerText = `Boredom: ${pet.boredom}`;
        petAge.innerText = `Age: ${pet.age}`;
        foodButton.addEventListener("click", pet.feed);
        lightSwitch.addEventListener("click", game.toggleLights);
        playButton.addEventListener("click", pet.play);
        setInterval(, 3000);
    },
    toggleLights: () => {
        // learned how to toggle a boolean from here: https://bobbyhadz.com/blog/javascript-toggle-boolean
        game.lightsOn = !game.lightsOn
        if (game.lightsOn) {
            console.log("The lights have been turned on.")
        } else {
            console.log("The lights have been turned off.")
        }
    }
}