(function() {

    const listNumbers = document.querySelectorAll("button:not(.operator):not(.equalSign)")
    const listOperators = document.querySelectorAll("button.operator")
    const resultElem = document.getElementById("result")
    const equalSign = document.getElementsByClassName("equalSign")[0];

    let firstNumber = "";
    let currentOperator = "";
    let secondNumber = "";
    let result = 0;

    const calcul = {
        "x" : function(a, b) { return (a * b).toFixed(2) },
        "-" : function(a, b) { return (a - b).toFixed(2) },
        "+" : function(a, b) { return (a + b).toFixed(2) },
        "%" : function(a, b) { return (a % b).toFixed(2) },
        "/" : function(a, b) { return (a / b).toFixed(2) },
    }

    // ANIMATION SUR LES BUTTONS ON CLICK
    for (let i = 0; i < listNumbers.length; i++) {
        listNumbers[i].addEventListener("click", function() {
            animationOnButtons(this);
            showValueOnScreen(this.innerHTML);
        });
    }

    for (let i = 0; i < listOperators.length; i++) {
        listOperators[i].addEventListener("click", function() {
            animationOnButtons(this);
            selectOperator(this.innerHTML);
        });
    }

    function animationOnButtons(button) {
        button.style.opacity = 0.6;

        setTimeout(function() {
            button.style.opacity = 1;
        }, 100)
    }

    // CALCUL
    function makeCalculation() {
        if (firstNumber != "" && currentOperator != "" && secondNumber != "") {
            result = calcul[currentOperator](parseFloat(firstNumber.replace(",", ".")), parseFloat(secondNumber.replace(",", ".")));
            resultElem.innerHTML = result;
            firstNumber = result.toString();
            secondNumber = "";
        }
    }

    function showValueOnScreen(value) {
        if (currentOperator == "") {
            firstNumber = checkStartingValue(firstNumber, value);
            resultElem.innerHTML = firstNumber;
        } else {
            if(firstNumber == ",") {
                firstNumber = "0";
            }
            secondNumber = checkStartingValue(secondNumber, value);
            resultElem.innerHTML = secondNumber;
        }
    }

    function checkStartingValue(number, value) {
        if (number == "0") {
            if (value == ",") {
                number += value;
                return number;
            }
            number = value;
            return number;
        } else if (number == ",") {
            number = "0" + number;
            return number;
        } else {
            number += value;
            return number;
        }
    }

    function selectOperator(operator) {
        if (operator != "AC") {
            if (firstNumber != "," && secondNumber != ",") {
                makeCalculation();
            }
            currentOperator = operator;
        } else {
            reset();
        }
    }

    // RESET AVEC LE BOUTON AC
    function reset() {
        resultElem.innerHTML = "0";
        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
    }

    // MAKE CALCULATION ON CLICK =

    equalSign.addEventListener("click", function() {
        if (firstNumber != "," && secondNumber != ",") {
            makeCalculation();
        }
    });


}())