const managerQuestions = [
  {
    name: 'name',
    message: 'What is the team managers name?',
    type: 'input',
  },
  {
    name: 'email',
    message: 'What is the managers email address?',
    type: 'input',
  },
  {
    name: 'id',
    message: 'What is the managers employee ID?',
    type: 'input',
  },
  {
    name: 'office',
    message: 'What is the managers office number?',
    type: 'input',
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
  },
  {
    name: 'email',
    message: 'What is the team members email address?',
    type: 'input',
    when: (answers) => answers.action !== 'Quit',
  },
  {
    name: 'id',
    message: 'What is the team members employee ID?',
    type: 'input',
    when: (answers) => answers.action !== 'Quit',
  },
  {
    name: 'school',
    message: 'What is the team members school?',
    type: 'input',
    when: (answers) => answers.action === 'Intern',
  },
  {
    name: 'github',
    message: 'What is the team members Github username.',
    type: 'input',
    when: (answers) => answers.action === 'Engineer',
  }
]

exports.managerQuestions = managerQuestions;
exports.engQuestions = engQuestions;