const cardsEl = document.getElementById("cards");
const cardContainerEl = document.getElementById("card-container");
const newCardContainerEl = document.getElementById("new-card-container");
const cards = [];

function create() {
  const input_question = document.getElementById("question").value;
  const input_answer = document.getElementById("answer").value;
  const card = { question: input_question, answer: input_answer };
  cards.push(card); // will be saved in local storage
  let { question, answer } = card;
  const cardEl = document.createElement("div");

  cardEl.className = "card";
  cardEl.innerText = question;
  cardEl.addEventListener("click", () => flipCard(answer, question, cardEl));

  cardsEl.appendChild(cardEl);
}

function flipCard(answer, question, cardEl) {
  cardEl.innerText = cardEl.innerText === question ? answer : question;
}

function toggleContainer() {
  if (cardContainerEl.style.display == "none") {
    cardContainerEl.style.display= "block";
    newCardContainerEl.style.display = "none";
  } else {
    cardContainerEl.style.display = "none";
    newCardContainerEl.style.display = "block";
  }
}

const formEl = document.getElementById("card-form");
formEl.addEventListener("submit", (e) => {
  create();
  toggleContainer();
  e.preventDefault();
});
