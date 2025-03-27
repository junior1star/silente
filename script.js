document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome! Click on 'Exercises' to practice adding Silent 'E'!");
});
function transformWord() {
    let wordElement = document.getElementById("word");
    wordElement.innerText = "Hope";
    wordElement.classList.add("transformed");
}
function playSound(word) {
    let audio = document.getElementById(word + "-audio");
    audio.play();
}

