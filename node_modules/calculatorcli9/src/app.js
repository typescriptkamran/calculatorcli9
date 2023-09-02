#! /usr/bin/env node
import * as inquirer from "inquirer";
import chalk from "chalk";
// callculater operators
var Operator;
(function (Operator) {
    Operator["ADD"] = "Addition";
    Operator["SUBTRACT"] = "Subtraction";
    Operator["MULTIPLY"] = "Multiplication";
    Operator["DIVIDE"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    console.log(chalk.overline.underline.blue.bold.italic(`This is a simple CLI command Based Calculator:`));
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validateNumber,
        },
        {
            type: "rawlist",
            name: "operator",
            message: "Select an operation:",
            choices: Object.values(Operator)
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter the second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.yellow.bgBlack(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.blue.bgYellowBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.blue.bgYellowBright(`Result is : ${result}`));
    }
}
export default main;
main();
