import * as inquirer from "inquirer";
import chalk from "chalk";
import { input } from '@inquirer/prompts';


// callculater operators

enum Operator 
{

    ADD = "Addition",
    SUBTRACT = "Subtraction",
    MULTIPLY = "Multiplication",
    DIVIDE = "Division",

} 

const prompt = inquirer.createPromptModule();

function validateNumber(input: string): boolean | string 
{ if (isNaN(parseFloat(input)))
    {
        return "Please enter a valid number"
    }
return true;
}

async function main()
{
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validateNumber,
        },
        {
            type: "rawlist", // or can be use list
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
        
    ])
    
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    let result: number;

    const selectedOperator = input.operator as Operator

  
    if (selectedOperator === Operator.ADD)
       {
        result = num1 + num2
        console.log(chalk.green.bgRedBright(`result is: ${result}`))


    } else if (selectedOperator === Operator.SUBTRACT) {
        result = num1 - num2
        console.log(chalk.green.bgRedBright(`result is: ${result}`))

    } else if (selectedOperator === Operator.MULTIPLY) {
        result = num1 * num2
        console.log(chalk.green.bgRedBright(`result is: ${result}`))

    } else if (selectedOperator === Operator.DIVIDE) {
        result = num1 / num2
        console.log(chalk.green.bgRedBright(`result is: ${result}`))
    }

    
}

main()