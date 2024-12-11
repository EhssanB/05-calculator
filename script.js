// basic operator functions

let divide = (x,y) => {
    return x / y
};

let multiply = (x,y) => {
    return x * y
};

let subtract = (x,y) => {
    return x - y
};

let add = (x,y) => {
    return x + y
};

let operate = (x, y, operation) => {
    return operation(x, y)
};

// DOM manipulation

let mainDisplay = document.querySelector(".main-display");
let calcDisplay = document.querySelector(".calc-display");

let clearBtn = document.querySelector(".clear");

let numbers = document.querySelectorAll(".number");

let operators = document.querySelectorAll(".op");

let clearDisplay = e => {
    mainDisplay.textContent = "";
    calcDisplay.textContent = "";
}

clearBtn.addEventListener("click", clearDisplay)

let displayNum = e => {

    if (mainDisplay.textContent == 0) clearDisplay()

    if (e.type == "click") {
        mainDisplay.textContent += e.target.textContent;
        calcDisplay.textContent += e.target.textContent;
    }

    if (e.type == "keydown") {
        mainDisplay.textContent += e.key;
        calcDisplay.textContent += e.key;
    }

}

let numberKeyInput = e => {
    if (e.code.includes("Digit")) displayNum(e)

    if (mainDisplay.textContent.includes(".") || calcDisplay.textContent.includes(".")) return

    if (e.code == "Period") displayNum(e)
}

let backSpaceDelete = e => {
    if (e.code == "Backspace") {
        console.dir(e)
        mainDisplay.textContent = mainDisplay.textContent.slice(0, -1)
        calcDisplay.textContent = calcDisplay.textContent.slice(0, -1)
    }
}

addEventListener("keydown", e => {

    backSpaceDelete(e);
    numberKeyInput(e);
})

numbers.forEach(numberBtn => {
    numberBtn.addEventListener("click", displayNum)
})

