const fs = require ('fs')
const inquirer = require('inquirer')
const path = require('path')
// const Manager = require ()
// const Intern = require ()
// const Engineer = require('./Libr.EngineerHtml')





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

//Engineer Questions
const engineerQ = [
{
    type: "input",
    name: "name",
    message: "What is the team engineers name",
}

]
//Manager Questions
const managerQ = [{}]


//Intern Questions
const internQ = [{}]

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
    buildE()
    buildM()
    buildI()
     .then(function(data){
         wtf("New.html", generateMarkdown(data));
         console.log(data)
     })}


init()