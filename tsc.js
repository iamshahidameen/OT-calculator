var currentDate = new Date();
console.log(currentDate);
var previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 17);
console.log('prev mon', previousMonth);
var currentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 16);
console.log('updated ', currentMonth);
var previousMonthString = previousMonth.toISOString().split('T')[0];
var currentMonthString = currentMonth.toISOString().split('T')[0];
console.log('previousMonthString ', previousMonthString);
console.log('currentMonthString ', currentMonthString);
var startMonthEl = document.getElementById('startMonth');
startMonthEl.value = previousMonthString;
var endMonthEl = document.getElementById('endMonth');
endMonthEl.value = currentMonthString;
var Employee = (function () {
    function Employee(baseSalary, otHours, otRate) {
        this.baseSalary = baseSalary;
        this.otHours = otHours;
        this.otRate = otRate;
    }
    Employee.prototype.calculateWorkingDays = function () {
    };
    Employee.prototype.displayEmployee = function () {
        console.log('Employee Base Salary is', this.baseSalary);
    };
    return Employee;
}());
var Employee1 = new Employee(1000, 10, 1.5);
Employee1.displayEmployee();
//# sourceMappingURL=tsc.js.map