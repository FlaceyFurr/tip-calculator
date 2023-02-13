/* Bill */
const bill: any = document.querySelector("#bill");
bill.value = "";

bill.addEventListener("change", function () {
  const billValue = parseFloat(bill.value) || 0;
});

/* Button */
const tipButton: any = document.querySelectorAll(".tip-button");

let selectedButton = null;
let tipPercentage = 0;

/* People */
const people: any = document.querySelector("#people");
people.value = "";

people.addEventListener("change", function () {
  const peopleValue = parseFloat(people.value);
});

/* Calculate */
const result = document.querySelector("#tip-price") as HTMLInputElement;
const total = document.querySelector("#total-price") as HTMLInputElement;

const tipResult = function () {
  const billValue = parseFloat(bill.value) || 0;
  const peopleValue = parseFloat(people.value) || 1;
  const calucalteTip = (billValue * tipPercentage) / peopleValue;
  result.innerHTML = calucalteTip.toFixed(2);
};

const totalResult = function () {
  const billValue = parseFloat(bill.value) || 0;
  const peopleValue = parseFloat(people.value) || 1;
  const calucalteTotal = (billValue * (1 + tipPercentage)) / peopleValue;
  total.innerHTML = calucalteTotal.toFixed(2);
};

bill.addEventListener("change", tipResult);
people.addEventListener("change", tipResult);
bill.addEventListener("change", totalResult);
people.addEventListener("change", totalResult);

for (const button of tipButton) {
  button.addEventListener("click", function () {
    for (const btn of tipButton) {
      btn.classList.remove("clicked");
    }
    button.classList.add("clicked");
    tipPercentage = parseFloat(button.dataset.tip);
    console.log(`${tipPercentage}`);
    tipResult();
    totalResult();
  });
}

/* Reset Button */
const resetButton: any = document.querySelector("#reset");

const checkResetButton = function () {
  if (bill.value !== "" || people.value !== "") {
    resetButton.style.backgroundColor = "";
    resetButton.style.cursor = "";
  } else {
    resetButton.style.backgroundColor = "hsl(172, 67%, 45%, 0.3)";
    resetButton.style.cursor = "not-allowed";
  }
};

resetButton.addEventListener("click", function (event) {
  if (bill.value === "" && people.value === "") {
    event.preventDefault();
  } else {
    bill.value = "";
    people.value = "";
    for (const button of tipButton) {
      button.classList.remove("clicked");
    }
    tipResult();
    totalResult();
  }
  checkResetButton();
});

bill.addEventListener("change", checkResetButton);
people.addEventListener("change", checkResetButton);
