const fs = require ('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require("./Libr/generateMarkdown");
const Engineer = require ("./Libr/EngineerHtml")
const Intern = require ("./Libr/InternHtml")
const Manager = require("./Libr/ManagerHtml")





//Write to file
function wtf (fileName, data){
    fs.writeFile(fileName, data , function(error) {
      console.log(data)
      
      if(error){
          return console.log(error)
      } else {
          console.log ("No errors here")
      }
        
    })};


    const addEmployee = () => {
        return new Promise((resolve) =>{
            inquirer.prompt([{
                type: "list",
                name:"role",
                message:"Add your employees!",
                choices:[
                    "Manager",
                    "Engineer",
                    "Intern",
                    {
                        name: "No More Employees?",
                        value: false
                    }
                ]
            }])
        })
    }

//Engineer Questions
const engineerQ = [
{
    type: "input",
    name: "name",
    message: "What is the team engineers name",
},{
    type: "input",
    name: "id",
    message: "What is the team engineers ID",
},{
    type: "input",
    name: "email",
    message: "What is the team engineers email",
},{
    type: "input",
    name: "officeNum",
    message: "What is the team engineers office Number",
}

]
//Manager Questions
const managerQ = [{
    type: "input",
    name: "name",
    message: "What is the team managers name",
},{
    type: "input",
    name: "id",
    message: "What is the team managers ID",
},{
    type: "input",
    name: "email",
    message: "What is the team managers email",
},{
    type: "input",
    name: "officeNum",
    message: "What is the team managers office Number",
}]


//Intern Questions
const internQ = [{
    type: "input",
    name: "name",
    message: "What is the team interns name",
},{
    type: "input",
    name: "id",
    message: "What is the team interns ID",
},{
    type: "input",
    name: "email",
    message: "What is the interns email",
},{
    type: "input",
    name: "officeNum",
    message: "What is the team interns office Number",
}]

//Builds engineer questions
function buildE (){
    inquirer.prompt(engineerQ)
    .then(engineerA => {
        const engineer = new Engineer()
    })
}

// Builds Manager questions
function buildM(){
    inquirer.prompt(managerQ)
    .then(managerA => {
        const manager= new Manager()
    })
}
// Builds Intern Questions
function buildI (){
    inquirer.prompt(internQ)
    .then(InternA => {
        const intern = new Intern()
    })
}


function init() {
    inquirer.prompt(addEmployee())
    .then(internQ, managerQ, engineerQ)
     .then(function(data){
         wtf("New.html", generateMarkdown(data));
         console.log(data)
     })}


init()