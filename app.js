const words = [
  "miah",
  "jedsen",
  "speerings",
  "jones",
  "disgust",
  "joshua",
  "smallzen",
  "unmonstair",
  "gamer",
  "hangman",
  "bain",
  "addict",
];
const unknownContainerEl = document.getElementById("unknown-container-el");
const inputEl = document.getElementById("input");
const btnEl = document.getElementById("btn");
const livesEl = document.getElementById("lives");
let lives = 3;
let generatedToken = Math.floor(Math.random() * words.length);
let generatedWord = words[generatedToken];

let generatedWordArr = generatedWord.split("");

for (let i = 0; i < generatedWordArr.length; i++) {
  let h1 = document.createElement("H1");
  h1.innerText = generatedWordArr[i];
  unknownContainerEl.append(h1);
  h1.classList.add("unknown");
}

function program() {
  function updateLives() {
    livesEl.innerText = lives;
    if (lives === 0) {
      alert("you have lost!!!");
      location.reload();
    }
  }
  updateLives();
  const characters = document.getElementsByClassName("unknown");
  btn.addEventListener("click", () => {
    guess = inputEl.value;
    if (generatedWordArr.includes(guess)) {
      let found = generatedWordArr.find((element) => {
        return element === guess;
      });
    } else {
      lives--;
      updateLives();
    }
    for (let i = 0; i < characters.length; i++) {
      if (characters.item(i).innerText === guess) {
        characters.item(i).classList.add("shown");
      }
    }
    let knownCharacters = document.getElementsByClassName("shown");
    if (knownCharacters.length === characters.length) {
      alert("yuv have won!!!");
      location.reload();
    }
    inputEl.value = "";
  });
}

program();
