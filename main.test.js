/**
 * @jest-environment jsdom
 */

const {
    formatNumber,
    isSurpriseNumber,
    surpriseMessage,
    updateDisplay,
    updateMessage,
    generateNumber,
} = require("./main");

describe("helper functions", () => {
    test("formatNumber pads single digits with leading zero", () => {
        expect(formatNumber(0)).toBe("00");
        expect(formatNumber(5)).toBe("05");
        expect(formatNumber(42)).toBe("42");
        expect(formatNumber(99)).toBe("99");
    });

    test("isSurpriseNumber returns true only for 67", () => {
        expect(isSurpriseNumber(67)).toBe(true);
        expect(isSurpriseNumber(66)).toBe(false);
        expect(isSurpriseNumber(68)).toBe(false);
    });

    test("surpriseMessage returns the special message only for 67", () => {
        expect(surpriseMessage(67)).toBe("Surprise! 6-7, 6, 7");
        expect(surpriseMessage(50)).toBe("A new number is ready.");
    });
});

describe("DOM integration", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="number-display" class="number"></div>
            <p id="message"></p>
            <button id="generate-btn" type="button"></button>
        `;
    });

    test("updateDisplay sets text content and surprise class", () => {
        const display = document.getElementById("number-display");

        updateDisplay("67", true);
        expect(display.textContent).toBe("67");
        expect(display.classList.contains("surprise")).toBe(true);

        updateDisplay("08", false);
        expect(display.textContent).toBe("08");
        expect(display.classList.contains("surprise")).toBe(false);
    });

    test("updateMessage sets the correct message for surprise and normal numbers", () => {
        const message = document.getElementById("message");

        updateMessage(67);
        expect(message.textContent).toBe("Surprise! 6-7, 6, 7");

        updateMessage(12);
        expect(message.textContent).toBe("A new number is ready.");
    });

    test("generateNumber returns a valid 0-99 value and updates DOM", () => {
        const display = document.getElementById("number-display");
        const message = document.getElementById("message");

        const value = generateNumber();
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThan(100);
        expect(display.textContent).toBe(value.toString().padStart(2, "0"));
        expect(message.textContent).toMatch(/(Surprise! 6-7, 6, 7|A new number is ready\.)/);
    });
});
