const scoreElement = document.getElementById("score");
const incrementButton = document.getElementById("incrementButton");

const strongerHandsButton = document.getElementById("buyUpgrade1"); // Renamed to Stronger Hands
const buyPassiveUpgrade = document.getElementById("buyPassiveUpgrade");

let score = 0;
let clickValue = 1; // Score increment per click
let strongerHandsCost = 10; // Updated variable name
let strongerHandsCount = 0; // Updated variable name

let passiveUpgradeCost = 100;
let passiveScorePerSecond = 0;
let passiveUpgradeCount = 0;

function updateScore() {
    scoreElement.textContent = Math.round(score); // Display score as an integer (whole number)
}

function updateShop() {
    strongerHandsButton.textContent = `Stronger Hands (+1 Score per Click, Cost: ${Math.round(strongerHandsCost)}, Count: ${strongerHandsCount})`; // Updated button text
    if (strongerHandsCount >= 10) {
        buyPassiveUpgrade.textContent = `Defenceless Children (+1 Score per Second, Cost: ${Math.round(passiveUpgradeCost)}, Count: ${passiveUpgradeCount})`;
    } else {
        buyPassiveUpgrade.textContent = "Locked Upgrade";
    }
}

incrementButton.addEventListener("click", function() {
    score += clickValue;
    updateScore();
});

strongerHandsButton.addEventListener("click", function() {
    if (score >= strongerHandsCost) {
        score -= strongerHandsCost;
        clickValue += 1;
        strongerHandsCost *= 1.1; // Increase the cost by 10%
        strongerHandsCount++;
        updateScore();
        updateShop();
    }
});

buyPassiveUpgrade.addEventListener("click", function() {
    if (strongerHandsCount >= 10) {
        if (score >= passiveUpgradeCost) {
            score -= passiveUpgradeCost;
            passiveScorePerSecond += 1;
            passiveUpgradeCost *= 1.1; // Increase the cost by 10%
            passiveUpgradeCount++;
            updateScore();
            updateShop();
        }
    }
});

// Update the score every second for passive upgrades
setInterval(function() {
    score += passiveScorePerSecond;
    updateScore();
}, 1000);

updateScore();
updateShop();
