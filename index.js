const fs = require ('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require("./Libr/generateMarkdown");
const Engineer = require ("./Libr/EngineerHtml")
const Intern = require ("./Libr/InternHtml")
const Manager = require("./Libr/ManagerHtml")
const employees= [],


function Start(){
    html();
    addEmployee();
}

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

function addEmployee(){
    inquirer.prompt([{
        message: "What is the team members name?",
        name:"name"
    },
    {  
        type:"list",
        message:"Select a role for the member",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
        ],
        name: "role"
    },
    {   message: "What is the email adress for the team member?",
        name: "email"

    },
    {
        message:"What is this team members id?",
        name:"id"
    
    },
    

])
}
    
    

//Engineer Questions
// const engineerQ = [
    
// {
//     type: "input",
//     name: "name",
//     message: "What is the team engineers name",
// },{
//     type: "input",
//     name: "id",
//     message: "What is the team engineers ID",
// },{
//     type: "input",
//     name: "email",
//     message: "What is the team engineers email",
// },{
//     type: "input",
//     name: "officeNum",
//     message: "What is the team engineers office Number",
// }
    
// ]
// //Manager Questions
// const managerQ = [{
//     type: "input",
//     name: "name",
//     message: "What is the team managers name",
// },{
//     type: "input",
//     name: "id",
//     message: "What is the team managers ID",
// },{
//     type: "input",
//     name: "email",
//     message: "What is the team managers email",
// },{
//     type: "input",
//     name: "officeNum",
//     message: "What is the team managers office Number",
// }]


// //Intern Questions
// const internQ = [{
//     type: "input",
//     name: "name",
//     message: "What is the team interns name",
// },{
//     type: "input",
//     name: "id",
//     message: "What is the team interns ID",
// },{
//     type: "input",
//     name: "email",
//     message: "What is the interns email",
// },{
//     type: "input",
//     name: "officeNum",
//     message: "What is the team interns office Number",
// }]


//     inquirer.prompt([{
//     type: "list",
//     name:"role",
//     message:"Add your employees!",
//     choices:[
//         "Manager",
//         "Engineer",
//         "Intern",
//         {
//             name: "No More Employees?",
//             value: false
//         }
//     ]
// }])
    


Start()