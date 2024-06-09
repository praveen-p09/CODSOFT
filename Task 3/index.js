function appendChar(char) {
  document.getElementById("display").value += char;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteChar() {
  let value = document.getElementById("display").value;
  document.getElementById("display").value = value.slice(0, -1);
}

function calculate() {
  try {
    let expression = document.getElementById("display").value;
    let result = evaluateExpression(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function evaluateExpression(expression) {
  let operators = ["+", "-", "*", "/", "%"];
  let parts = expression.split(/(\+|-|\*|\/|%)/);
  let result = parseFloat(parts[0].trim());

  for (let i = 1; i < parts.length; i += 2) {
    let operator = parts[i].trim();
    let operand = parseFloat(parts[i + 1].trim());

    if (isNaN(operand)) {
      throw new Error("Invalid expression");
    }

    if (!operators.includes(operator)) {
      throw new Error("Invalid operator");
    }

    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "%":
        result %= operand;
        break;
      case "/":
        if (operand === 0) {
          throw new Error("Division by zero");
        }
        result /= operand;
        break;
      default:
        throw new Error("Invalid operator");
    }
  }

  return result;
}

function clearEntry() {
  let value = document.getElementById("display").value;
  let operators = ["+", "-", "*", "/"];
  let functions = ["sqrt"];

  let lastOperatorIndex = -1;
  for (let i = value.length - 1; i >= 0; i--) {
    if (
      operators.includes(value[i]) ||
      (i > 0 && functions.includes(value.substring(i - 3, i + 1)))
    ) {
      lastOperatorIndex = i;
      break;
    }
  }

  if (lastOperatorIndex !== -1) {
    document.getElementById("display").value = value.substring(
      0,
      lastOperatorIndex + 1
    );
  } else {
    document.getElementById("display").value = "";
  }
}
function square() {
  try {
    let expression = document.getElementById("display").value;
    let result = evaluateExpression(expression);
    document.getElementById("display").value = result * result;
  } catch (error) {
    document.getElementById("display").value = error;
  }
}

function root() {
  try {
    let expression = document.getElementById("display").value;
    let result = Math.sqrt(evaluateExpression(expression));
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function reciprocal() {
  try {
    let expression = document.getElementById("display").value;
    let result = evaluateExpression(expression);
    if (result === 0) {
      document.getElementById("display").value = "Divide by zero error";
    }
    document.getElementById("display").value = 1 / result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function signChange() {
  try {
    let expression = document.getElementById("display").value;
    let result = evaluateExpression(expression);
    document.getElementById("display").value = result * -1;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("display")
    .addEventListener("keypress", function (event) {
      let key = event.key;
      if (key >= "0" && key <= "9") {
        appendChar(key);
      } else if (
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%"
      ) {
        appendChar(key);
      } else if (key === "Enter") {
        calculate();
      } else if (key === "c" || key === "C") {
        clearAll();
      } else if (key === "Backspace") {
        clearEntry();
      }
    });
});
