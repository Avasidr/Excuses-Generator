/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

let who = ["I", "My bunny", "My dog", "My bird"];
let action = ["fell on", "crushed", "broke"];
let what = ["a zebra crosswalk", "the keys", "the car"];
let when = [
  "on my way to class",
  "while eating",
  "when I was asleep",
  "during my lunch",
  "while I was praying"
];

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("I am an excuse");
};

const randomExcuse = array => {
  return Math.floor(Math.random() * array.length);
};

let generateExcuse = () => {
  return (
    who[randomExcuse(who)] +
    " " +
    action[randomExcuse(action)] +
    " " +
    what[randomExcuse(what)] +
    " " +
    when[randomExcuse(when)]
  );
};
