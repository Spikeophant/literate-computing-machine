const managerQuestions = [
  {
    name: 'name',
    message: 'What is the team managers name?',
    type: 'input',
    validate: answer => {
      if(answer) {
        return true;
      } else {
        console.log('Please input a name.');
        return false;
      }
    }
  },
  {
    name: 'email',
    message: 'What is the managers email address?',
    type: 'input',
    validate: answer => {
      // thanks https://www.w3resource.com/javascript/form/email-validation.php but cleaned up the unnecessary escapes
      // in their solution.
      if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(answer)) {
        return true;
      } else {
        console.log('Please input a valid email address.');
        return false;
      }
    }
  },
  {
    name: 'id',
    message: 'What is the managers employee ID?',
    type: 'input',
    validate: answer => {
      if(isNaN(answer)) {
        console.log('ID numbers are numeric only.');
        return false;
      } else {
        return true;
      }
    }
  },
  {
    name: 'office',
    message: 'What is the managers office number?',
    type: 'input',
    validate: answer => {
      if(isNaN(answer)) {
        console.log('Office numbers are numeric only.');
        return false;
      } else {
        return true;
      }
    }
  }
  ]

const engQuestions = [
  {
    name: 'action',
    message: 'Would you like to add an Engineer, and Intern, or write the HTML and quit?',
    type: 'list',
    choices: ['Engineer', 'Intern', 'Quit']
  },
  {
    name: 'name',
    message: 'What is the team members name?',
    type: 'input',
    when: (answers) => {
      return (answers.action !== 'Quit');
    },
    validate: answer => {
      if(answer) {
        return true;
      } else {
        console.log('Please input a name.');
        return false;
      }
    }
  },
  {
    name: 'email',
    message: 'What is the team members email address?',
    type: 'input',
    when: (answers) => answers.action !== 'Quit',
    validate: answer => {
      // thanks https://www.w3resource.com/javascript/form/email-validation.php but cleaned up the unnecessary escapes
      // in their solution.
      if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(answer)) {
        return true;
      } else {
        console.log('Please input a valid email address.');
        return false;
      }
    }
  },
  {
    name: 'id',
    message: 'What is the team members employee ID?',
    type: 'input',
    when: (answers) => answers.action !== 'Quit',
    validate: answer => {
      if(isNaN(answer)) {
        console.log('Office numbers are numeric only.');
        return false;
      } else {
        return true;
      }
    }
  },
  {
    name: 'school',
    message: 'What is the team members school?',
    type: 'input',
    when: (answers) => answers.action === 'Intern',
    validate: answer => {
      if(answer) {
        return true;
      } else {
        console.log('Please input a school.');
        return false;
      }
    }
  },
  {
    name: 'github',
    message: 'What is the team members Github username.',
    type: 'input',
    when: (answers) => answers.action === 'Engineer',
    validate: answer => {
      if(answer) {
        return true;
      } else {
        console.log('Please input a Github username.');
        return false;
      }
    }
  }
]

exports.managerQuestions = managerQuestions;
exports.engQuestions = engQuestions;