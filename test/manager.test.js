const Manager = require('../lib/manager');
describe('Manager', () => {
  it('Create a manger with a given Name, Email and employee ID, office number.', () => {
    const manager = new Manager('Manager', '123', 'manager@company.com', '34');
    expect(manager.name).toEqual('Manager');
    expect(manager.employeeID).toEqual('123');
    expect(manager.email).toEqual('manager@company.com');
    expect(manager.office).toEqual('34');
  })
})