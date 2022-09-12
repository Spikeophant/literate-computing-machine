const Engineer = require('../lib/engineer');
describe('Engineer', () => {
  it('Create a engineer with a given Name, Email and employee ID, github username.', () => {
    const engineer = new Engineer('Engineer1', '1', 'engineer1@company.com', 'engineer1');
    expect(engineer.name).toEqual('Engineer1');
    expect(engineer.id).toEqual('1');
    expect(engineer.email).toEqual('engineer1@company.com');
    expect(engineer.github).toEqual('engineer1');
    expect(engineer.role).toEqual('engineer');
    expect(engineer.getGithub()).toEqual(engineer.github);
  })
})