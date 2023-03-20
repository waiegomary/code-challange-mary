const basicSalary = prompt("Enter basic salary: ");
const benefits = prompt("Enter benefits: ");
const grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

let payee = 0;
if (grossSalary > 24000) {
    payee = 0.3 * (grossSalary - 24000);
} else if (grossSalary > 16250) {
    payee = 0.25 * (grossSalary - 16250);
} else if (grossSalary > 11500) {
    payee = 0.2 * (grossSalary - 11500);
} else if (grossSalary > 7500) {
    payee = 0.15 * (grossSalary - 7500);
} else if (grossSalary > 3750) {
    payee = 0.1 * (grossSalary - 3750);
}

const nhifDeductions = 0.015 * grossSalary;
const nssfDeductions = 0.06 * grossSalary;
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

console.log(`Gross salary: ${grossSalary}`);
console.log(`Payee: ${payee}`);
console.log(`NHIF deductions: ${nhifDeductions}`);
console.log(`NSSF deductions: ${nssfDeductions}`);
console.log(`Net salary: ${netSalary}`);





