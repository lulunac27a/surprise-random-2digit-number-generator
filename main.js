const display = document.getElementById("numberDisplay"); //number display element
const message = document.getElementById("message"); //message display element
const button = document.getElementById("generateBtn"); //generate button element

function formatNumber(value) {
    //format number to two digits
    return value.toString().padStart(2, "0"); //pad the number with leading zero if less than 10
}

function isSurpriseNumber(value) {
    //check if the number is 67 (6-7) (6 7)
    return value === 67; //6-7 (6 7)
}

function generateNumber() {
    //generate a random number between 00 and 99
    const value = Math.floor(Math.random() * 100); //generate a random number between 00 and 99
    display.textContent = formatNumber(value); //format number to two digits and display it
    display.classList.toggle("surprise", isSurpriseNumber(value)); //toggle surprise class if the number is 67 (6-7) (6 7)

    if (isSurpriseNumber(value)) {
        //check if the number is 67 (6-7) (6 7)
        message.textContent = "Surprise! 6-7, 6, 7"; //display message if the number is 67 (surprise 6-7)
    } else {
        message.textContent = "A new number is ready.";
    }
}

button.addEventListener("click", generateNumber); //add event listener to the button to generate a new number when clicked
generateNumber(); //generate a number on page load
