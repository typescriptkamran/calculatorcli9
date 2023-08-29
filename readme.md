@typescriptkamran/cli-calculator
A simple command-line calculator built with TypeScript.

Installation
To use the CLI calculator, you need to have Node.js installed on your system. Then, you can install the package globally using npm:

bash
Copy code
npm install -g @typescriptkamran/cli-calculator
Usage
Once the package is installed, you can use the calculator via the command line.

bash
Copy code
calculator
The calculator will prompt you to enter mathematical expressions. It supports basic arithmetic operations, parentheses, and floating-point numbers.

Example Usage
bash
Copy code
$ calculator
> This is a simple CLI command Based Calculator:
> ? Please enter the first number: 2
> ? Select an operation: Multiplication
> ? Please enter the second number: 5
> Result is : 10

###Command Line Options
The CLI calculator supports the following command line options:


# If you want to import it as a module in typescript Node JS project

## Configuration Changes

### `tsconfig.json`

Update your `tsconfig.json` file with the following changes:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    // ...other options
  },
  // ...other sections
  // Uncomment and modify if you want to save .js files in a different directory
  // "outDir": "./dist",
}
```

### `package.json`

Modify your `package.json` by adding the following line:

```json
{
  // ...other settings
  "type": "module"
}
```

### Add the following line to your index.ts
```
import main from "@typescriptkamran/cli-calculator"

main()
```
###Troubleshooting
If you encounter any issues while using the CLI calculator, please consider the following:

Ensure that you've installed Node.js on your system.
Check for any typos or syntax errors in your mathematical expressions.
If the issue persists, feel free to report it on the GitHub repository.
https://github.com/typescriptkamran/cli-calculator

Contributing
Contributions are welcome! If you find a bug or have an idea for improvement, please submit an issue or pull request on the GitHub repository.
https://github.com/typescriptkamran/cli-calculator
License
This package is distributed under the MIT License.
