const fs = require ('fs')
const inquirer = require('inquirer')
const Intern = require ("./Libr/InternHtml")
const Manager = require("./Libr/ManagerHtml")
const Engineer = require("./Libr/EngineerHtml")
const Employee = require ("./Libr/EmployeeHtml")
const employees= [];


function Start() {
    addEmployee();
    DefaultHtml();
    


};


// This is the function to add a new employee from the terminal
function addEmployee(){
    inquirer.prompt([{
        message: "What is the team members name?",
        type: "input",
        name:"name"
    },
    {  
        type:"list",
        message:"Select a role for the Teammember",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {   message: "What is the email address for the team member?",
        type: "input",
        name: "email"

    },
    {
        message:"What is this team members id?",
        type: "input",
        name:"id"
    
    },
    {
       message: "What is the team members github?" ,
       type: "input",
       name: "github"
    }])
    .then(function({name, role, id, email}){
        let roleI = "";
        if (role === "Engineer"){
            roleI = "github"
        } else if (role === "Intern"){
        roleI = "school";
        }
        else {
            roleI = "officeNumber";
        }
        inquirer.prompt([{
            message:`What is the team-members ${roleI}`,
            name:"roleI"
        },
        {   type: "list",
            message:"Would you like to add more team Members?",
            choices:[
                "yes",
                "no"
            ], name: "moreTeam"
         
       
        }])
      .then(function({moreTeam, roleI}){
    let newTeamM;
    if (role === "Intern") {
        newTeamM = new Intern(name, email, id, roleI );
        
    }
    else if (role === "Engineer") {
    newTeamM = new Engineer(name, email, id, roleI);
        
    }else{
    newTeamM = new Manager(name, email, id, roleI);
    }
    employees.push(newTeamM);
    newHtml(newTeamM)
    .then(function(){
        if (moreTeam = "yes"){
            newHtml();
        
        }else{
            END();
        }
    })
    
    
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
        <link rel ="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <title>Team Generator</title>
    </head>
    <body>
        <nav class = "navbar navbar-dark bg-dark mb-5">
            <span>Team Generator</span></nav>
            <div class = "container">
                <div class = "row">
`
fs.writeFile("./GeneratedHtml/DefaultHtml.html", html, function(err){
    if (err){console.log(err);}

});
    
}

function newHtml(member){
return new Promise(function (resolve, reject) {

const name = member.getName();
const roles = member.getRole();
const id = member.getId();
const email = member.getEmail();



let data = "";
if (roles === "Engineer"){
    const github = member.getGithub();
    data = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 classs = "card-title">Engineer</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${id}</li>
      <li class="list-group-item">Email: ${email}</li>
      
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">github: ${github}</a>
    
    </div>
  </div>
  `
    } else if (roles === "Intern"){
        const school =  member.getSchool();
        data = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${name} Role: INTERN</h5>
          
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: ${email}</li>
          <li class="list-group-item">School: ${school}</li>
        </ul>
    
      </div>
      `
    }else{
        const officeNumber = member.getOfficeNumber();
        data = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${id}<br> Role: Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${email}</li>
          <li class="list-group-item">Email:${name} </li>
          <li class="list-group-item">Phone: ${officeNumber}</li>
        </ul>

      </div>
      `
    }
    
    fs.appendFile("./GeneratedHtml/DefaultHtml.html", data, function(err){
        if(err){
            return reject(err);
        };
        return resolve();

    });
    console.log("adding")
});


}
function END(){
const html =
 `
</div>
</div>
</body>
</html>`
fs.appendFile("./GeneratedHtml/DefaultHtml.html", html, function(err){

})
console.log("end")
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