const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern')
const inquirer = require('inquirer');
const questions = require('./lib/questions');
const fs = require('fs');
const teamTemplate = require('./src/teamTemplate');
const htmlBlock = require('./src/employeeHTMLBlockTemplate');

//initialize Team variable to use throughout, and to use
// to build our resulting HTML.
let employees = [];
// Add team members here.
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
          const employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
          employees.push(employee);
        }
        return addTeam();
      }
    })
    .catch(err => console.log(err));
}
// start build, always start with a manager.
const buildTeam = () => {
  return inquirer.prompt(questions.managerQuestions)
    .then(answers => {
      const employee = new Manager(answers.name, answers.id, answers.email, answers.office);
      employees.push(employee);
    })
    .catch(err => console.log(`Something went wrong:\n ${err}`)
    )
}

// write output.  takes array of objects.
const writeFile = (arr) => {
  let htmlString = '';
  for (const i in arr) {
    if (arr[i].getRole() === 'manager') {
      htmlString += htmlBlock.managerHTML(arr[i]);
    } else if (arr[i].getRole() === 'engineer') {
      htmlString += htmlBlock.engineerHTML(arr[i]);
    } else if (arr[i].getRole() === 'intern') {
      htmlString += htmlBlock.internHTML(arr[i]);
    }
  }
  htmlString = teamTemplate(htmlString);

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }
  fs.writeFileSync('./dist/team.html', htmlString);
  fs.copyFileSync('./src/teamTemplate.css', './dist/teamTemplate.css');
}


//do the chained promise calls here.
//this concept was really hard for me to understand.
//the functions return immediately if called, do not resolve first.
//then I get a bunch of promise pendings.  If I .then them togeher
//it waits for the prior promise to complete, and THEN passes whatever data down to the next.
//I've really been struggling with this so this exercise was great for this.
buildTeam()
  .then(addTeam)
    .then(employees => writeFile(employees))
  .catch(err => console.log(err));
