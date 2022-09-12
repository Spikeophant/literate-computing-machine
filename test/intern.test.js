const Intern = require('../lib/intern');
describe('Intern', () => {
  it('Create a intern with a given Name, Email and employee ID, school.', () => {
    const intern = new Intern('Intern1', '2', 'intern1@company.com', 'school1');
    expect(intern.name).toEqual('Intern1');
    expect(intern.employeeID).toEqual('2');
    expect(intern.email).toEqual('intern1@company.com');
    expect(intern.school).toEqual('school1');
    expect(intern.role).toEqual('intern');
  })
})