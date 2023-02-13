/* Bill */
var bill = document.querySelector("#bill");
bill.value = "";
bill.addEventListener("change", function () {
    var billValue = parseFloat(bill.value) || 0;
});
/* Button */
var tipButton = document.querySelectorAll(".tip-button");
var selectedButton = null;
var tipPercentage = 0;
/* People */
var people = document.querySelector("#people");
people.value = "";
people.addEventListener("change", function () {
    var peopleValue = parseFloat(people.value);
});
/* Calculate */
var result = document.querySelector("#tip-price");
var total = document.querySelector("#total-price");
var tipResult = function () {
    var billValue = parseFloat(bill.value) || 0;
    var peopleValue = parseFloat(people.value) || 1;
    var calucalteTip = (billValue * tipPercentage) / peopleValue;
    result.innerHTML = calucalteTip.toFixed(2);
};
var totalResult = function () {
    var billValue = parseFloat(bill.value) || 0;
    var peopleValue = parseFloat(people.value) || 1;
    var calucalteTotal = (billValue * (1 + tipPercentage)) / peopleValue;
    total.innerHTML = calucalteTotal.toFixed(2);
};
bill.addEventListener("change", tipResult);
people.addEventListener("change", tipResult);
bill.addEventListener("change", totalResult);
people.addEventListener("change", totalResult);
var _loop_1 = function (button) {
    button.addEventListener("click", function () {
        for (var _i = 0, tipButton_2 = tipButton; _i < tipButton_2.length; _i++) {
            var btn = tipButton_2[_i];
            btn.classList.remove("clicked");
        }
        button.classList.add("clicked");
        tipPercentage = parseFloat(button.dataset.tip);
        console.log("".concat(tipPercentage));
        tipResult();
        totalResult();
    });
};
for (var _i = 0, tipButton_1 = tipButton; _i < tipButton_1.length; _i++) {
    var button = tipButton_1[_i];
    _loop_1(button);
}
/* Reset Button */
var resetButton = document.querySelector("#reset");
var checkResetButton = function () {
    if (bill.value !== "" || people.value !== "") {
        resetButton.style.backgroundColor = "";
        resetButton.style.cursor = "";
    }
    else {
        resetButton.style.backgroundColor = "hsl(172, 67%, 45%, 0.3)";
        resetButton.style.cursor = "not-allowed";
    }
};
resetButton.addEventListener("click", function (event) {
    if (bill.value === "" && people.value === "") {
        event.preventDefault();
    }
    else {
        bill.value = "";
        people.value = "";
        for (var _i = 0, tipButton_3 = tipButton; _i < tipButton_3.length; _i++) {
            var button = tipButton_3[_i];
            button.classList.remove("clicked");
        }
        tipResult();
        totalResult();
    }
    checkResetButton();
});
bill.addEventListener("change", checkResetButton);
people.addEventListener("change", checkResetButton);
