const fs = require ('fs')
const inquirer = require('inquirer')
const path = require('path')
const Engineer = require ("./Libr/EngineerHtml")
const Intern = require ("./Libr/InternHtml")
const Manager = require("./Libr/ManagerHtml")
const employees= [];


function Start() {
    addEmployee();
    DefaultHtml()
};


// This is the function to add a new employee from the terminal
function addEmployee(){
    inquirer.prompt([{
        message: "What is the team members name?",
        name:"name"
    },
    {  
        type:"list",
        message:"Select a role for the Teammember",
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
    
    }])
    .then(function({name, role, id, email}){
        let roleI = "";
        if (role === "Intern"){
            roleI = "school"
        } else if (role === "Engineer"){
        roleInfo = "Git username";
        }
        else {
            roleI = "phone";
        }
        inquirer.prompt([{
            message:"What is the team-members role?"
        },
        { 
            message:"Would you like to add more team Members?",
            choices:[
                "yes",
                "no"
            ],
         
       
        }])
      .then(function({moreTeam, roles}){
    let newTeamM;
    if (role === "Intern") {
        newTeamM = new Intern(name, email, id, roles )
        
    }
    else if (role === "Engineer") {
    newTeamM = new Engineer(name, email, id, roles)
        
    }else{
    newTeamM = new Manager(name, email, id, roles)
    }
    employees.push(newTeamM);
    
    
   })


}
)}
function DefaultHtml() {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel ="stylesheet" href = "<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"">
        <title>Team Generator</title>
    </head>
    <body>
        <nav class = "navbar navbar-dark bg-dark mb-5">
            <span>Team Generator</span></nav>
            <div class = "container">
                <div class = "row">
`
fs.writeFile("./GeneratedHtml/DefaultHtml.html", html, function(err){

})
    
}

function newHtml(member){

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