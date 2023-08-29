#!/usr/bin/env node

const path = require('path');
const { Command } = require('commander');
const packageJson = require('../package.json');
const { main } = require('../src/app.js'); // Update the path as needed

const program = new Command();

program
  .version(packageJson.version)
  .description('A simple CLI calculator')
  .action(main);

program.parse(process.argv);
