# @typescriptkamran/cli-calculator

## You can import it as a module in typescript Node JS project

### Configuration Changes

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
