const questions = require('../lib/questions');
describe('manager questions', () => {
  it('Should validate with known given inputs.', () => {
    const answers = {
      name: 'Name',
      email: 'Email@company.com',
      id: '1',
      office: '1',
    }
    for (let question of questions.managerQuestions) {
      expect(question.validate(answers[question.name])).toEqual(true);
    }
  });
})

describe('employee questions', () => {
  it('Should validate with known given inputs', () => {
    const answers = {
      name: 'Name',
      email: 'Email@company.com',
      id: '1',
      school: 'School',
      github: 'Github',
    }
    for (let question of questions.engQuestions) {
      if (question.name !== 'action') {
        expect(question.validate(answers[question.name])).toEqual(true);
      }
    }
  })
})

