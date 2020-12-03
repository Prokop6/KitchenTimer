/* ----------------------------
/*  Name: KitchenTimer
    Author: Prokop
    Version: 
/* -------------------------- */

//initialisation of objects 

const resetButton = document.getElementById("resetButton");
const startButton = document.getElementById("startButton");

//function declaration
const informOfEnd = () => {
    console.log("Alarm!");
}

/* const counter = (min, sec) => {
    for (; min >=0; min--){
        for (; sec >=0; sec--) {
            delayedNotification(min,sec)
        }
        sec = 59
    }
informOfEnd();
}; */

/* const delayedNotification = (min, sec) => {
    setTimeout(() => console.log(`00:${min}:${sec}`), 1000)
}; */

const fastCounter = (min, sec) => {
    for (; min >=0; min--){
        for (; sec >=0; sec--) {
            console.log(`00:${min}:${sec}`)
        }
        sec = 59
    }
informOfEnd();
};

const delayedCounter = (min, sec) => {
    setTimeout(() => fastCounter(min,sec), 1000)
};

//tests
const cryForReset = () => {
    alert("RESET!")
};

const cryForStart = () => {
    alert("Start!")
};

resetButton.onclick = cryForReset;
startButton.onclick = cryForStart;

fastCounter(1,15);
delayedCounter(1,2);