// placeholder name value
let enteredName = ""
// html elements
const petName = document.querySelector("#name")
const petHunger = document.querySelector("#hunger")
const petSleepiness = document.querySelector("#sleepiness");
const petBoredom = document.querySelector("#boredom");
const petAge = document.querySelector("#age");
const foodButton = document.querySelector("#feed")
const lightSwitch = document.querySelector("#lights");
const playButton = document.querySelector("#play");
const startButton = document.getElementById("start")
const petNameField = document.querySelector("#pet-name")
// starting class
const pet = {
    name: "",
    hunger: 5,
    sleepiness: 1,
    boredom: 1,
    age: 1,
    lightsOn: true,
    // functions to increase the stats
    getHungry: () => {
        this.hunger++
        updateHunger();
    },
    getSleepy: () => {
        this.sleepiness++
        updateSleepiness();
    },
    getBored: () => {
        this.boredom++;
        updateBoredom();
    },
    getOld: () => {
        this.age++;
        updateAge();
    },
    // functions to decrease the stats
    feed: () => {
        this.hunger -= 1;
        petHunger.innerText = `Hunger: ${this.hunger}`;
        console.log("Yum yum yum!");
    },
    play: () => {
        this.boredom -= 1;
        petBoredom.innerText = `Boredom: ${this.boredom}`;
        console.log("Whee!")
    },
    toggleLights: () => {
        // learned how to toggle a boolean from here: https://bobbyhadz.com/blog/javascript-toggle-boolean
        this.lightsOn = !this.lightsOn
        if (this.lightsOn) {
        console.log("The lights have been turned on.")
        } else {
            console.log("The lights have been turned off.")
        }
    }
}
// update the stat values
const updateHunger = () => {
    petHunger.innerText = `Hunger: ${pet.hunger}`;
}
const updateSleepiness = () => {
    petSleepiness.innerText = `Sleepiness: ${pet.sleepiness}`;
}
const updateBoredom = () => {
    petBoredom.innerText = `Boredom: ${pet.boredom}`;
}
const updateAge = () => {
    petAge.innerText = `Age: ${pet.age}`;
}
const updateAll = () => {
    updateHunger();
    updateSleepiness();
    updateBoredom();
    updateAge();
}
// run the hunger, sleep, boredom, age functions at set intervals
const runClock = () => {
    // thank you w3schools for my life https://www.w3schools.com/js/js_timing.asp
    setInterval(pet.getHungry(), 10000);
    setInterval(pet.getSleepy(), 10000);
    setInterval(pet.getBored(), 10000);
    setInterval(pet.getOld(), 60000);
    if (pet.hunger >= 10 || pet.hunger <= 0 || pet.sleepiness >= 10 || pet.boredom >= 10) {
        clearInterval(runClock)
        alert("Your pet has died, thanks to your cringe parenting.")
    }
}
// start the game
const openTheGame = () => {
    // https://www.javascripttutorial.net/javascript-dom/javascript-form/
    pet.name = `${startButton.elements["pet-name"].value}`;
    updateAll();
    foodButton.addEventListener("click", pet.feed);
    lightSwitch.addEventListener("click", pet.toggleLights);
    playButton.addEventListener("click", pet.play);
    // run the hunger, sleep, boredom functions at set intervals
    runClock();
}
// name and start
const naming = () => {
    enteredName = document.querySelector("#pet-name").value
    console.log(enteredName)
    petName.innerText = enteredName
    openTheGame();
}