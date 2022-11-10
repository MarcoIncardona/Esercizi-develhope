function calculateSalary(role) {
    switch(role){
        case "ceo":
            return ("the salary of " + role + " is 2200$")
            break;
        case "manager":
            return ("the salary of " + role + " is 1800$")  
            break;
        case "cto":
            return ("the salary of " + role + " is 1800$")
            break;
        case "developer":
            return ("the salary of " + role + " is 1500$")
            break;
        default:
            return ("the salary of " + role + " is 1000$")
            break  
    }
  }

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);