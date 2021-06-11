const Employee = require("./Libr/EmployeeHtml")

describe("Employee includes methods"), ()=>{
    const a = new Employee();
    expect(typeof(a)).toBe("object")
}
describe("getRole"), ()=>{
    it("getRole(), should return \"Employee\"",()=> {
        const test = "Employee"
        const a = new Employee ("bob", 1, "git@git.net")
        expect(a.getRole()).tobe(test)
        
    })
}

describe ("getName", ()=> {
    it("gets name"),()=>{
        const test = "bob";
        const a = new Employee(test)
        expect(a.getName()).tobe(testvalue);
    }
})