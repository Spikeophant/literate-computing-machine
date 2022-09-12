const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name,id,email);
    this.office = office;
    this.role = 'manager';
  }

  getOffice () {
    return this.office;
}
}

module.exports = Manager;