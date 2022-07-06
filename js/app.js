class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepiness = 1;
        this.boredom = 1;
        this.age = 1;
    }
}

const pet = new Tamagotchi("Tony");

const petName = document.createElement("h3");
petName.innerText = `Name: ${pet.name}`
const petHunger = document.createElement("h3");
petHunger.innerText = `Hunger: ${pet.hunger}`
const petSleepiness = document.createElement("h3");
petSleepiness.innerText = `Sleepiness: ${pet.sleepiness}`
const petBoredom = document.createElement("h3");
petBoredom.innerText = `Boredom: ${pet.boredom}`
const petAge = document.createElement("h3");
petAge.innerText = `Age: ${pet.age}`

const stats = document.querySelector("#stats")

stats.appendChild(petName);
stats.appendChild(petHunger);
stats.appendChild(petSleepiness);
stats.appendChild(petBoredom);
stats.appendChild(petAge);