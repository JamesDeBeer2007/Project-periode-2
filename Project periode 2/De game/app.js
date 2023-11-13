let ScoreElement = document.getElementById("NormalScore");
let incrementButton = document.getElementById("incrementButton");
let MoonScoreElement = document.getElementById("MoonScore")
let score = 0;

function updateScore() {
    ScoreElement.textContent = score;
}

incrementButton.addEventListener("click", function() {
    score++;
    updateScore();
    clickSound.play(); 
    let NewClickSound = new Audio(clickSound.src);
    NewClickSound.play();
});


updateScore();
