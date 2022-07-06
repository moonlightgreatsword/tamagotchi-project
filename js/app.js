// create a class for the pet
    // placeholder name

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
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

// instantiate the pet class
    // placeholder name

const pet = new Tamagotchi("Tony");

// object for the game
    // key value for lights
    // function to turn lights on/off

const game = {
    lightsOn: true,
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

// fill h3 elements with pet stats

const petName = document.querySelector("#name")
petName.innerText = pet.name
const petHunger = document.querySelector("#hunger")
petHunger.innerText = `Hunger: ${pet.hunger}`
const petSleepiness = document.querySelector("#sleepiness");
petSleepiness.innerText = `Sleepiness: ${pet.sleepiness}`
const petBoredom = document.querySelector("#boredom");
petBoredom.innerText = `Boredom: ${pet.boredom}`
const petAge = document.querySelector("#age");
petAge.innerText = `Age: ${pet.age}`

// add event listeners for the buttons

const foodButton = document.querySelector("#feed")
foodButton.addEventListener("click", pet.feed)

const lightSwitch = document.querySelector("#lights");
lightSwitch.addEventListener("click", game.toggleLights);

const playButton = document.querySelector("#play");
playButton.addEventListener("click", pet.play)