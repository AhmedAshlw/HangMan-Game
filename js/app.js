/*-------------------------------- Constants --------------------------------*/
let currentName = 0;
let wrongGuesses = 0;
let maxGuesses = 6;
/*-------------------------------- Variables --------------------------------*/
let Rword = [
  { name: "Ahmed", hint: "Boy Name" },
  { name: "Hassan", hint: "Boy Name" },
  { name: "Ali", hint: "Boy Name" },
  { name: "Fatima", hint: "Girl Name" },
  { name: "Nawal", hint: "Girl Name" },
  { name: "Alaa", hint: "Girl Name" },
  { name: "Trout", hint: "Fish Name" },
  { name: "Shark", hint: "Fish Name" },
];

/*------------------------ Cached Element References ------------------------*/
const hangManImage = document.querySelector(".pic img");
const word = document.querySelector(".word");
const keyword = document.querySelector(".keyword");
const key = document.querySelector(".key");
const button = document.querySelectorAll(".letter");
const win = document.querySelector(".win");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const Letters = document.querySelector(".letters");

/*-------------------------------- Functions --------------------------------*/
const getRandomWord = () => {
  const { name, hint } = Rword[Math.floor(Math.random() * Rword.length)];
  currentName = name;
  document.querySelector(
    ".word"
  ).innerText = `${hint} & first letter ${name.slice(0, 1)}`;
  console.log(name);

  key.innerHTML = name
    .split("")
    .map(() => `<li class="keyword"></li>`)
    .join("");

  key.querySelectorAll("li")[0].textContent = name.charAt(0);
  let StartSound = new Audio("./Audio/game-start.mp3");
  StartSound.play();
};

const disableButtons = () => {
  const buttons = document.querySelectorAll(".letters button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
};

const startGame = (button, clickedLetter) => {
  console.log(button, clickedLetter);

  if (currentName.includes(clickedLetter)) {
    [...currentName].forEach((letter, index) => {
      if (letter === clickedLetter) {
        key.querySelectorAll("li")[index].innerText = letter;
        key.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    wrongGuesses++;
    console.log(wrongGuesses);
    hangManImage.src = `./img/${wrongGuesses}.png`;
    let StartSound = new Audio("./Audio/game-char-wrong.mp3");
    StartSound.play();
  }
  button.disabled = true;
  if (wrongGuesses === maxGuesses) {
    win.textContent = "Status : Game Over ";
    disableButtons();
    let StartSound = new Audio("./Audio/game-over.mp3");
    StartSound.play();
  }
  const isWordGuessed = () => {
    const correctLetters = key.querySelectorAll(".guessed");
    return correctLetters.length + 1 === currentName.length;
  };
  if (isWordGuessed()) {
    win.textContent = "Status : Win ";
    disableButtons();
    let StartSound = new Audio("./Audio/game-win.mp3");
    StartSound.play();
  }
};

for (let index = 97; index <= 122; index++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(index);
  Letters.appendChild(button);
  button.addEventListener("click", (init) => {
    startGame(init.target, String.fromCharCode(index));
  });
}

start.addEventListener("click", getRandomWord);
reset.addEventListener("click", init);

function init() {
  wrongGuesses = 0;
  const buttons = document.querySelectorAll(".letters button");
  buttons.forEach((button) => {
    button.disabled = false;
  });
  win.innerText = "Status :";
  hang.src = "./img/gibbet.png";
  getRandomWord();
}
