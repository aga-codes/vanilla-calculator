const numbers = document.querySelectorAll(".number");
const prevDis = document.querySelector(".prev-display");
const currDis = document.querySelector(".curr-display");
const deleteBttn = document.querySelector(".delete");
const clearBttn = document.querySelector(".clear");
const operations = document.querySelectorAll(".operation");
const equalBttn = document.querySelector(".equal");
let operation;

numbers.forEach((number) => {
	number.addEventListener("click", () => {
		appendNumber(number.innerText);
	});
});

const appendNumber = (number) => {
	if (number === "." && currDis.innerText.includes(".")) return;

	currDis.innerText += number;
};

operations.forEach((singleOperation) => {
	singleOperation.addEventListener("click", () => {
		selectOperation(singleOperation.innerText);
	});
});

const selectOperation = (singleOperation) => {
	if (currDis.innerText === "") {
		return;
	}
	count(singleOperation);

	operation = singleOperation;
	currDis.innerText += singleOperation;
	prevDis.innerText = currDis.innerText;
	currDis.innerText = "";
};

const count = (singleOperation) => {
	let result;
	const previousValue = parseFloat(prevDis.innerText);
	const currentValue = parseFloat(currDis.innerText);

	if (isNaN(previousValue) || isNaN(currentValue)) {
		return;
	}

	switch (operation) {
		case "-":
			result = previousValue - currentValue;
			break;
		case "+":
			result = previousValue + currentValue;
			break;
		case "*":
			result = previousValue * currentValue;
			break;
		case "/":
			result = previousValue / currentValue;
			break;
		default:
			return;
	}

	currDis.innerText = result;
};

clearBttn.addEventListener("click", () => {
	clearEverything();
});

const clearEverything = () => {
	currDis.innerText = "";
	prevDis.innerText = "";
	console.log("clicked!!!");
};

equalBttn.addEventListener("click", () => {
	count();
	prevDis.innerText = "";
});

deleteBttn.addEventListener("click", () => {
	currDis.innerText = currDis.innerText.slice(0, -1);
});
