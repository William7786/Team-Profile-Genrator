const Employee = require("./EmployeeHtml");

class Engineer extends Employee{
  constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
  }
  getRole(){
    return "Engineer";
  }
  getGithub(){return this.github

}
  getName(){
    return this.name
  }
}
module.exports = Engineer