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
    let result;
    const selectedOperator = input.operator;
    if (selectedOperator === Operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`result is: ${result}`));
    }
    else if (selectedOperator === Operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.green.bgRedBright(`result is: ${result}`));
    }
    else if (selectedOperator === Operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.green.bgRedBright(`result is: ${result}`));
    }
    else if (selectedOperator === Operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.green.bgRedBright(`result is: ${result}`));
    }
}
main();
