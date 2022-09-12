const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const inquirer = require('inquirer');
const questions = require('./lib/questions');
//bottom bar to remind us what we're doing.

//initialize Team variable to use throughout, and to use
// to build our resulting HTML.
let employees = [];

