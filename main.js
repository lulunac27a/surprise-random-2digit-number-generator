const display = document.getElementById("numberDisplay");
const message = document.getElementById("message");
const button = document.getElementById("generateBtn");

function formatNumber(value) {
    return value.toString().padStart(2, "0");
}

function isSurpriseNumber(value) {
    return value === 67;
}

function generateNumber() {
    const value = Math.floor(Math.random() * 100);
    display.textContent = formatNumber(value);
    display.classList.toggle("surprise", isSurpriseNumber(value));

    if (isSurpriseNumber(value)) {
        message.textContent = "Surprise! 6-7, 6, 7";
    } else {
        message.textContent = "A new number is ready.";
    }
}

button.addEventListener("click", generateNumber);
generateNumber();
