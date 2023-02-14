"use strict";
import { getRandomQuote } from "./modules/RandomQuote.js";
import { renderQuote } from "./modules/RenderQuote.js";
import { modifyQuote } from "./modules/modifyquote.js";
import { displayTime } from "./modules/displayTime.js";
import { checkAnswer } from "./modules/checkAnswer.js";
import { congratulationMessage } from "./modules/CongratulationMessage.js";
import { keyChecker } from "./modules/keyChecker.js";
import { resetInput } from "./modules/resetInput.js";

const UIquoteBox = document.getElementById("quote-text-box");
const UItextArea = document.getElementsByClassName("text-area")[0];
const UIstartButton = document.getElementById("start");
const UItimer = document.getElementById("timer");

const TypingGame = async () => {
  //loading screen awaiting fetch data
  UIquoteBox.innerHTML = `<iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mashable-3oEjI6SIIHBdRxXI40"></a></p>`;
  UIstartButton.disabled = false;
  

  const data = await getRandomQuote();
  const splittedData = data.split("");
  let quoteLength = splittedData.length;
  UItextArea.setAttribute("maxlength", quoteLength);
  UItextArea.setAttribute("readonly", true);
  renderQuote(data, UIquoteBox);

  const timer = {
    count : 0,
    isActive : true
  }
  UItimer.innerText = displayTime(timer.count);


  UIstartButton.addEventListener("click", (e) => {
    e.target.disable = true;
    UItextArea.removeAttribute("readonly", false);
    UItextArea.focus();

    setInterval(() => {
      if (timer.isActive) {
        timer.count++;

        UItimer.innerText = displayTime(timer.count);
      } else {
        return;
      }
    }, 1000);
  });

  UItextArea.addEventListener("keyup", (e) => {
    let key = e.key;
    let input = e.target.value;
    let highlightOutput = "";
    let userInput = [];
    if (keyChecker(key)) {
      userInput = input.split("");
      highlightOutput = modifyQuote(splittedData, userInput);
      renderQuote(highlightOutput.join(""), UIquoteBox);
    }

    if (userInput.length === quoteLength) {
      let rightAnswer = checkAnswer(highlightOutput);
      timer.isActive = rightAnswer ? false : true;

      if (rightAnswer) {
        resetInput(UItextArea);
        congratulationMessage(
          displayTime,
          timer.count,
          TypingGame,
          quoteLength,
        );
        
        quoteLength = "";
      }
    }
  });
};

TypingGame();
