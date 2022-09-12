const Employee = require('../lib/employee');
describe('Employee',  () => {
  it('should create an employee object with a given name, email and id, and have methods for returning these.'
    ,() => {
    const employee = new Employee('Employee', '123', 'employee@company.com');
    expect(employee.name).toEqual(employee.getName());
    expect(employee.id).toEqual(employee.getId());
    expect(employee.email).toEqual(employee.getEmail());
    expect(employee.getRole()).toEqual(employee.getRole());
    expect(employee.getName()).toEqual('Employee');
    expect(employee.getEmail()).toEqual('employee@company.com');
    expect(employee.getId()).toEqual('123');
    expect(employee.getRole()).toEqual('employee');
  });
});