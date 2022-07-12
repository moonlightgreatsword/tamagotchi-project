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
const petImage = document.createElement("img")
petImage.setAttribute("src", "https://static.wikia.nocookie.net/rude-tales-of-magic/images/c/cb/Flipcup.jpg/")
petImage.setAttribute("alt", "A screaming creature with the head of a bear and the body of an owl")
petImage.setAttribute("id", "pet-img")
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
        // pet evolution
        if (pet.age == 10) {
            alert(`Congratulations! ${pet.name} has evolved into ${pet.name} 2!`);
            pet.name = `${pet.name} 2`;
            petName.innerText = `${pet.name}`;
            updateAge();
        } else {updateAge();}
        updateAge();
        console.log(`Happy birthday! ${pet.name} has gotten older!`)
    },
    // functions to decrease the stats
    feed: () => {
        if (pet.hunger > 0) {
            pet.hunger--;
            updateHunger();
            console.log("Yum yum yum!");
        } else {
            alert(`${pet.name} doesn't want to eat anymore!`)
            console.log("Can't eat right now")
        }
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
            enclosure.style.backgroundColor = "rgb(161, 232, 204)";
            console.log("The lights have been turned on.");
        } else {
            enclosure.style.backgroundColor = "rgb(73, 81, 89)";
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
        pet.getOld();
        if (pet.hunger >= 10 || pet.boredom >= 10 || pet.sleepiness >= 10) {
            enclosure.style.backgroundColor = "rgb(197, 222, 205)";
            alert("Your pet has died, thanks to your cringe parenting.");
            petImage.remove();
            clearInterval(timers)
        }
    }, 5000);
}
// start the game
const openTheGame = () => {
    enclosure.appendChild(petImage)
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