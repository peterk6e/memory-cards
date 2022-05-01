const cardContainerEl = document.getElementById("card-container");
const newCardContainerEl = document.getElementById("new-card-container");
const arrowL = document.getElementById("arrow-left");
const arrowR = document.getElementById("arrow-right");
const cardEl = document.getElementById("card");
const cardsEl = document.getElementById("cards");
const cards = [];
var index = 0;
cardEl.style.display = "none";

function create() {
  const input_question = document.getElementById("question").value;
  const input_answer = document.getElementById("answer").value;
  const card = {
    question: input_question,
    answer: input_answer,
  };
  cards.push(card); // will be saved in local storage
}

function displayCards() {
  if (cardEl.style.display === "none") cardEl.style.display = "block"; // for 1st card
  cardEl.innerText = cards[index].question;
}

function flipCard() {
  let { question, answer } = cards[index];
  cardEl.innerText = cardEl.innerText === question ? answer : question;
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

//Event listeners
const formEl = document.getElementById("card-form");
formEl.addEventListener("submit", (e) => {
  create();
  displayCards();
  toggleContainer();
  e.preventDefault();
});

arrowL.addEventListener("click", () => {
  index = index == 0 ? cards.length : --index;
  displayCards();
});

arrowR.addEventListener("click", () => {
  index = index == cards.length ? 0 : ++index;
  displayCards();
});
