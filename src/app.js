import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const number = generateRandomNumber();
  const suit = generateRandomSuit();
  const symbol = getSuitSymbol(suit);

  const card = document.querySelector('.card');
  card.className = "card " + suit;

  document.querySelector('.number').innerHTML = number;
  document.querySelector('.top-suit').innerHTML = symbol;
  document.querySelector('.bottom-suit').innerHTML = symbol;

  const symbolColor = (suit === "heart" || suit === "diamond") ? "red" : "black";

  document.querySelector('.top-suit').style.color = symbolColor;
  document.querySelector('.bottom-suit').style.color = symbolColor;
  document.querySelector('.number').style.color = "black";
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

let generateRandomSuit = () => {
  let suits = ["heart", "diamond", "club", "spade"];
  return suits[Math.floor(Math.random() * suits.length)];
};

let getSuitSymbol = (suit) => {
  switch (suit) {
    case "heart": return "♥";
    case "diamond": return "♦";
    case "club": return "♣";
    case "spade": return "♠";
  }
};


