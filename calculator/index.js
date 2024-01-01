"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function main() {
    inquirer_1.default
        .prompt([
        {
            type: "input",
            name: "num1",
            message: "Enter the first number",
        },
        {
            type: "input",
            name: "num2",
            message: "Enter the second number",
        },
        {
            type: "list",
            name: "operation",
            choices: ["+", "-", "*", "/"],
            message: "Enter Your Operation",
        },
    ])
        .then((answers) => {
        console.log(answers);
        //   if (operation == "+") {
        //     sum(num1, num2);
        //   } else if (operation == "-") {
        //     subtract(num1, num2);
        //   } else if (operation == "*") {
        //     multiply(num1, num2);
        //   } else if (operation == "/") {
        //     division(num1, num2);
        //   } else {
        //     console.log("Invalid Operation");
        //   }
        // Use user feedback for... whatever!!
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function sum(num1, num2) {
    const result = num1 + num2;
    console.log("Sum", result);
}
function subtract(num1, num2) {
    const result = num1 - num2;
    console.log("Subtraction", result);
}
function multiply(num1, num2) {
    const result = num1 * num2;
    console.log("Multiply", result);
}
function division(num1, num2) {
    const result = num1 / num2;
    console.log("Division", result);
}
main();
