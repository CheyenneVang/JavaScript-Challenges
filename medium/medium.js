const speak = prompt("Type here in all UPPERCASE, all lowercase, or Normal");
const uppercaseResult = speak.toUpperCase();
const lowercaseResult = speak.toLowerCase();

/*console.log(speak)*/

if (speak === uppercaseResult) {
  console.log("This person was SHOUTING");
} else if (speak === lowercaseResult){
    console.log("This person was whispering");
} else {
    console.log("This person was neither SHOUTING or whispering");
}

/* if ((speak !== uppercaseResult) && (speak !== lowercaseResult)) {
    console.log("not shouting or whispering")
}*/