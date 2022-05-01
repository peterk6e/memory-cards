const cardContainerEl = document.getElementById("card-container");
const newCardContainerEl = document.getElementById("new-card-container");
const arrowL = document.getElementById("arrow-left");
const arrowR = document.getElementById("arrow-right");
const cardEl = document.getElementById("card");
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
    question: input_question.value,
    answer: input_answer.value,
  };
  cards.push(card); // will be saved in local storage
  input_question.value="";
  input_answer.value="";
}

function displayCards() {
  if (cardEl.style.display === "none") cardEl.style.display = "flex"; // for 1st card
  cardEl.innerText = cards[index].question;
  updateController();
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
    displayCards();
  }
});

arrowR.addEventListener("click", () => {
  if (index != cards.length){
    index++;
    displayCards();
  }
});

