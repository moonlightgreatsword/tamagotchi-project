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
const startButton = document.getElementById("start");
const petNameField = document.querySelector("#pet-name");
const enclosure = document.getElementById("enclosure");
// starting class
let pet = {
    name: "",
    hunger: 5,
    sleepiness: 1,
    boredom: 1,
    age: 1,
    lightsOn: true,
    // functions to increase the stats
    getHungry: () => {
        pet.hunger++;
        updateHunger();
        console.log(`${pet.name} has gotten hungrier!`)
    },
    getSleepy: () => {
        pet.sleepiness++;
        updateSleepiness();
        console.log(`${pet.name} has gotten sleepier!`)
    },
    getBored: () => {
        pet.boredom++;
        updateBoredom();
        console.log(`${pet.name} has gotten more bored!`)
    },
    getOld: () => {
        pet.age++;
        updateAge();
        console.log(`Happy birthday! ${pet.name} has gotten older!`)
    },
    // functions to decrease the stats
    feed: () => {
        pet.hunger--;
        updateHunger();
        console.log("Yum yum yum!");
    },
    play: () => {
        if (pet.boredom > 0) {
            pet.boredom--;
            updateBoredom();
            console.log("Whee!")
        } else {
            alert(`${pet.name} doesn't want to play anymore!`)
            console.log("Can't play right now")
        }
    },
    toggleLights: () => {
        // learned how to toggle a boolean from here: https://bobbyhadz.com/blog/javascript-toggle-boolean
        pet.lightsOn = !pet.lightsOn
        if (pet.lightsOn) {
            enclosure.style.backgroundColor = "rgb(255, 255, 255)";
            console.log("The lights have been turned on.");
        // let timers = setInterval(() => {
        //     pet.getHungry();
        //     pet.getSleepy();
        //     pet.getBored();
        //     if (pet.hunger >= 10 || pet.hunger <= 0 || pet.boredom >= 10 || pet.sleepiness >= 10) {
        //         clearInterval(timers)
        //         alert("Your pet has died, thanks to your cringe parenting.")
        //     }
        // }, 10000);
        } else {
            enclosure.style.backgroundColor = "rgb(0, 0, 0)";
            pet.sleepiness = 1;
            updateSleepiness();
            // clearInterval(timers)
            console.log("The lights have been turned off.")
        }
    }
}
// update the stat values
const updateHunger = () => {
    petHunger.innerText = `Hunger: ${pet.hunger}`;
    console.log(`The value of pet.hunger has been updated, and is now ${pet.hunger}`)
}
const updateSleepiness = () => {
    petSleepiness.innerText = `Sleepiness: ${pet.sleepiness}`;
    console.log(`The value of pet.sleepiness has been updated, and is now ${pet.sleepiness}`)
}
const updateBoredom = () => {
    petBoredom.innerText = `Boredom: ${pet.boredom}`;
    console.log(`The value of pet.boredom has been updated, and is now ${pet.boredom}`)
}
const updateAge = () => {
    petAge.innerText = `Age: ${pet.age}`;
    console.log(`The value of pet.age has been updated, and is now ${pet.age}`)
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
    let timers = setInterval(() => {
        pet.getHungry();
        pet.getSleepy();
        pet.getBored();
        if (pet.hunger >= 10 || pet.hunger < 0 || pet.boredom >= 10 || pet.sleepiness >= 10) {
            clearInterval(timers)
            alert("Your pet has died, thanks to your cringe parenting.")
        }
    }, 10000);
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
    let ageTimer = setInterval(() => {
        pet.getOld();
        if (pet.hunger >= 10 || pet.hunger <= 0 || pet.boredom >= 10 || pet.sleepiness >= 10) {
            clearInterval(ageTimer)
        }
    }, 60000)
}
// name and start
const naming = () => {
    enteredName = document.querySelector("#pet-name").value
    console.log(enteredName)
    petName.innerText = enteredName
    openTheGame();
}