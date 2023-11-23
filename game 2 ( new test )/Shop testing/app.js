let scoreElement = document.getElementById("score");
let incrementButton = document.getElementById("incrementButton");

let buyUpgrade1 = document.getElementById("buyUpgrade1");
let buyPassiveUpgrade = document.getElementById("buyPassiveUpgrade");
let buyPassiveUpgrade2 = document.getElementById("buyPassiveUpgrade");


let score = 0;
let clickValue = 1; // Score increment per click
let upgrade1Cost = 10;
let upgrade1Count = 0;

let passiveUpgradeCost = 30;
let passiveScorePerSecond = 0;
let passiveUpgradeCount = 0;

let passiveUpgradeCost2 = 100;
//let passiveScorePerSecond2 = 0;
//let passiveUpgradeCount2 = 0;

function updateScore() {
    scoreElement.textContent = score.toFixed(2); // Format the score with a maximum of two decimal places
}

function updateShop() {
    buyUpgrade1.textContent = `Buy Upgrade 1 (+1 Score per Click, Cost: ${upgrade1Cost.toFixed(2)}, Count: ${upgrade1Count})`;
    if (upgrade1Count >= 10) {
        buyPassiveUpgrade.textContent = `Buy Passive Upgrade (+1 Score per Second, Cost: ${passiveUpgradeCost.toFixed(2)}, Count: ${passiveUpgradeCount})`;
    } else {
        buyPassiveUpgrade.textContent = "Passive Upgrade: Locked";
    }
}

incrementButton.addEventListener("click", function() {
    score += clickValue;
    updateScore();
});

buyUpgrade1.addEventListener("click", function() {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost;
        clickValue += 1;
        upgrade1Cost *= 1.1; // Increase the cost by 10%
        upgrade1Count++;
        updateScore();
        updateShop();
    }
});

buyPassiveUpgrade.addEventListener("click", function() {
    if (upgrade1Count >= 10) { // Check if you have at least 10 of Upgrade 1
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



setInterval(function() {
    score += passiveScorePerSecond;
    updateScore();
}, 1000);

updateScore();
updateShop();
