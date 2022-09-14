const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const inquirer = require('inquirer');
const questions = require('./lib/questions');
//bottom bar to remind us what we're doing.

//initialize Team variable to use throughout, and to use
// to build our resulting HTML.
let employees = [];
// start the team build here.  We always start with a manager.


const addTeam = () => {
  return inquirer.prompt(questions.engQuestions)
    .then(answers => {
      if (answers.action === 'Quit') {
        return employees;
      } else {
        if (answers.action === 'Intern') {
          const employee = new Intern(answers.name, answers.id, answers.email, answers.school);
          employees.push(employee);
        } else {
          console.log(answers);
          const employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
          employees.push(employee);
        }
        return addTeam();
      }
    })
    .catch(err => console.log(err));
}

const buildTeam = () => {
  return inquirer.prompt(questions.managerQuestions)
    .then(answers => {
      const employee = new Manager(answers.name, answers.id, answers.email, answers.office);
      employees.push(employee);
    })
    .catch(err => console.log(`Something went wrong:\n ${err}`)
    )
}

const writeFile = () => {
  return console.log(employees);
}


buildTeam()
  .then(addTeam)
    .then(employees => {
      return writeFile(employees);
    })
  .catch(err => console.log(err));1
