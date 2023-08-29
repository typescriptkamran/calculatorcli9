@echo off

rem Calculate the relative path to the bin directory from the batch file's directory
set "BIN_DIR=%~dp0bin"

rem Run the TypeScript calculator using Node.js
node "%BIN_DIR%\calculator.js" %*
