const cardContainerEl = document.getElementById("card-container");
const newCardContainerEl = document.getElementById("new-card-container");
const arrowL = document.getElementById("arrow-left");
const arrowR = document.getElementById("arrow-right");
const cardEl = document.getElementById("card");
const cardFrontEl = document.getElementById("card-front");
const cardBackEl = document.getElementById("card-back");
const cardsEl = document.getElementById("cards");
const formEl = document.getElementById("card-form");
const indexEl = document.getElementById("index");
const totalEl = document.getElementById("total");
const cards = [];
var index = 0;
cardEl.style.display = "none";

function create() {
  const input_question = document.getElementById("question");
  const input_answer = document.getElementById("answer");
  const card = {
    question: input_question.value.toUpperCase(),
    answer: input_answer.value.toUpperCase(),
  };
  cards.push(card); // will be saved in local storage
  input_question.value = "";
  input_answer.value = "";
}

function displayCards() {
  if (cardEl.style.display === "none") {
    cardEl.style.display = "flex";
  }
  cardFrontEl.innerText = cards[index].question;
  cardBackEl.innerText = cards[index].answer;

  cardEl.style.transform = "";
  updateController();
}

function toggleContainer() {
  if (cardContainerEl.style.display == "none") {
    cardContainerEl.style.display = "block";
    newCardContainerEl.style.display = "none";
  } else {
    cardContainerEl.style.display = "none";
    newCardContainerEl.style.display = "block";
  }
}

function flipCard() {
  if (cardEl.style.transform == "rotateY(180deg)") {
    cardEl.style.transform = "";
  } else {
    cardEl.style.transform = "rotateY(180deg)";
  }
}

function clearCards() {
  cards.splice(0);
  cardEl.style.display = "none";
  index = 0;
  indexEl.innerText = 0;
  totalEl.innerText = cards.length;
}

function updateController() {
  indexEl.innerText = index + 1;
  totalEl.innerText = cards.length;
}

function slide(direction) {
  if (direction == "right") {
    cardEl.classList.add("animate-right");
  } else {
    cardEl.classList.add("animate-left");
  }
  setTimeout(() => {
    cardEl.classList.remove("animate-left");
    cardEl.classList.remove("animate-right");
  }, 1000);
}

//Event listeners
formEl.addEventListener("submit", (e) => {
  create();
  displayCards();
  toggleContainer();
  e.preventDefault();
});

arrowL.addEventListener("click", () => {
  if (index != 0) {
    index--;
    slide("left");
    displayCards();
  }
});

arrowR.addEventListener("click", () => {
  if (index != cards.length - 1) {
    index++;
    slide("right");
    displayCards();
  }
});
