let scoreElement1 = document.getElementById("score1");
let incrementButton1 = document.getElementById("incrementButton1");
let clickSound1 = document.getElementById("clickSound1");
let clickImage1 = document.getElementById("incrementButton1");

let scoreElement2 = document.getElementById("score2");
let incrementButton2 = document.getElementById("incrementButton2");
let clickSound2 = document.getElementById("clickSound2");
let clickImage2 = document.getElementById("incrementButton2");

let scoreElement3 = document.getElementById("score3");
let incrementButton3 = document.getElementById("incrementButton3");
let clickSound3 = document.getElementById("clickSound3");
let clickImage3 = document.getElementById("incrementButton3");

let score1 = 0;
let score2 = 0;
let score3 = 0;

clickImage1.addEventListener("click", function() {
    clickImage1.classList.add("clicked");
    setTimeout(() => {
        clickImage1.classList.remove("clicked");
    },100);
});

clickImage2.addEventListener("click", function() {
    clickImage2.classList.add("clicked");
    setTimeout(() => {
        clickImage2.classList.remove("clicked");
    },100);
});

clickImage3.addEventListener("click", function() {
    clickImage3.classList.add("clicked");
    setTimeout(() => {
        clickImage3.classList.remove("clicked");
    },100);
});

function playClickSound(clickSound) {
    let newClickSound = new Audio(clickSound.src); // Create a new audio element
    newClickSound.play(); // Play the new audio element
}

function updateScore1() {
    scoreElement1.textContent = score1;
}

function updateScore2() {
    scoreElement2.textContent = score2;
}

function updateScore3() {
    scoreElement3.textContent = score3;
}

incrementButton1.addEventListener("click", function() {
    score1++;
    updateScore1();
    playClickSound(clickSound1);
});

incrementButton2.addEventListener("click", function() {
    score2++;
    updateScore2();
    playClickSound(clickSound2);
});

incrementButton3.addEventListener("click", function() {
    score3++;
    updateScore3();
    playClickSound(clickSound3);
});

updateScore1();
updateScore2();
updateScore3();