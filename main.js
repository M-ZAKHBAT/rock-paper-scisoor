const resultUser = document.getElementById("resultUser");
const resultComputer = document.getElementById("resultComputer");
const btnPapier = document.getElementById("papier");
const btnCiseau = document.getElementById("ciseau");
const btnPierre = document.getElementById("pierre");
let valueComputer = null,
  valueUser = null;
const params = {
  0: btnPapier,
  papier: btnPapier,
  1: btnCiseau,
  ciseau: btnCiseau,
  2: btnPierre,
  pierre: btnPierre,
};

function addZero(value) {
  if (value < 10) return `0${value}`;
  return value;
}
function init() {
  resultUser.innerText = addZero(0);
  resultComputer.innerText = addZero(0);

  btnPapier.addEventListener("click", setResultUser);
  btnCiseau.addEventListener("click", setResultUser);
  btnPierre.addEventListener("click", setResultUser);
}
function getRandomValueForComputer() {
  const contentComputer = document.getElementById("contentComputer");
  contentComputer.innerHTML = null;
  const value = Math.floor(Math.random() * 3);
  const clonedElement = params[value].cloneNode(true);
  clonedElement.classList.add("contentSvg");
  contentComputer.appendChild(clonedElement);
  valueComputer = clonedElement.getAttribute("id");
  checkResult();
}
function setResultUser(e) {
  const contentUser = document.getElementById("contentUser");
  contentUser.innerHTML = null;
  const clonedElement = e.target.cloneNode(true);
  clonedElement.classList.add("contentSvg");
  contentUser.appendChild(clonedElement);
  valueUser = clonedElement.getAttribute("id");
  getRandomValueForComputer();
}
function checkResult() {
  document.getElementById("contentResult").classList = [];
  let message = "",
    cssClass = "";
  if (valueUser === valueComputer) {
    message = "Egalité";
    cssClass = "";
  } else if (
    (valueUser === "pierre" && valueComputer === "ciseau") ||
    (valueUser === "ciseau" && valueComputer === "papier") ||
    (valueUser === "papier" && valueComputer === "pierre")
  ) {
    message = "Rba7tk a M3alem";
    resultUser.innerText = addZero(parseInt(resultUser.innerText) + 1);
    cssClass = "win";
  } else {
    message = "Computer Gagne";
    resultComputer.innerText = addZero(parseInt(resultComputer.innerText) + 1);
    cssClass = "wrong";
  }
  document.getElementById("contentResult").innerText = message;
  document.getElementById("contentResult").classList.add(cssClass);
}
//execute
init();
