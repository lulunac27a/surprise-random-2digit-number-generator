function getDisplay() {
    return typeof document !== "undefined"
        ? document.getElementById("number-display")
        : null; //number display element
}

function getMessage() {
    return typeof document !== "undefined"
        ? document.getElementById("message")
        : null; //message display element
}

function getButton() {
    return typeof document !== "undefined"
        ? document.getElementById("generate-btn")
        : null; //generate button element
}

function formatNumber(value) {
    //format number to two digits
    return value.toString().padStart(2, "0"); //pad the number with leading zero if less than 10
}

function isSurpriseNumber(value) {
    //check if the number is 67 (6-7) (6 7)
    return value === 67; //6-7 (6 7)
}

function surpriseMessage(value) {
    return isSurpriseNumber(value)
        ? "Surprise! 6-7, 6, 7"
        : "A new number is ready."; //display surprise message if the number is 67 (surprise 6-7)
}

function updateDisplay(formattedValue, surprise) {
    const display = getDisplay();
    if (!display) {
        return;
    }

    display.textContent = formattedValue;
    display.classList.toggle("surprise", surprise); //toggle surprise class if the number is 67 (6-7) (6 7)
}

function updateMessage(value) {
    const message = getMessage();
    if (!message) {
        return;
    }

    message.textContent = surpriseMessage(value); //display message if the number is 67 (surprise 6-7)
}
function generateNumber() {
    //generate a random number between 00 and 99
    const value = Math.floor(Math.random() * 100); //generate a random number between 00 and 99
    const formattedValue = formatNumber(value); //format number to two digits and display it
    const surprise = isSurpriseNumber(value);

    updateDisplay(formattedValue, surprise);
    updateMessage(value);

    return value;
}

function init() {
    const button = getButton();
    if (button) {
        button.addEventListener("click", generateNumber); //add event listener to the button to generate a new number when clicked
    }

    generateNumber(); //generate a number on page load
}

if (typeof window !== "undefined") {
    init();
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        getDisplay,
        getMessage,
        getButton,
        formatNumber,
        isSurpriseNumber,
        surpriseMessage,
        updateDisplay,
        updateMessage,
        generateNumber,
        init,
    };
}
