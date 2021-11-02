//1. Get pet name from user and store in variable.(petName)
//2. Keep track of energy and happiness levels and store in variable.
//3.





let petName=prompt("Name your pet");
let energy = 0;
let happiness = 0;
for(i=0;i<6;i++) {
    let action = prompt("feed, pet or walk?");

if (action === "feed") {
    energy +=2;
    console.log(energy);
    
} else if(action === "pet") {
    happiness +=1;
    console.log(happiness);
}
if (action === "walk" && energy > 0) {
    happiness +=2;
    energy -=1;
} else if (action === "walk" && energy === 0) {
    alert("Not enough energy for a walk");
}
}

console.log(petName + " has " + happiness + " happiness and " +energy + " energy.");

