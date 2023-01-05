import { Dog } from "/Dog.js";
import { dogs } from "/data.js";

let dogIndex = 0;
let nowDog = new Dog(dogs[dogIndex]);

const liked = () => {
    if(!nowDog.hasBeenSwiped) {
        nowDog.setStatus(true)
        setBadge();
        setTimeout(() => getNewDog(), 2000);
    }
    
}

const rejected = () => {
    if(!nowDog.hasBeenSwiped) {
        nowDog.setStatus(false)
        setBadge();
        setTimeout(() => getNewDog(), 2000);
    }
    
}

const getNewDog = () => {
    dogIndex++;
    dogIndex === 3 ? dogIndex = 0 : false;
    nowDog = new Dog(dogs[dogIndex]);
    render();
    
}

const setBadge = () => document.getElementById("root").innerHTML += nowDog.getBadgeHtml();
const render = () => document.getElementById("root").innerHTML = nowDog.getDogHtml();

document.getElementById("heart").addEventListener("click", liked)
document.getElementById("cross").addEventListener("click", rejected)

render()