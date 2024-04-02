var currentDate = new Date();
var previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 17);
var currentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 16);
var previousMonthString = previousMonth.toISOString().split('T')[0];
var currentMonthString = currentMonth.toISOString().split('T')[0];
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
    Employee.prototype.calculatedWorkingDays = function (startDate, endDate) {
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        var totalWorkingDays = 0;
        for (var date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                totalWorkingDays++;
            }
        }
        return totalWorkingDays;
    };
    return Employee;
}());
var submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    var monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    var overtimeHours = parseFloat(document.getElementById('overtimeHours').value);
    var overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
    if (startMonthEl.value &&
        endMonthEl.value &&
        monthlySalary &&
        overtimeHours &&
        overtimeRate) {
        var Employee1 = new Employee(monthlySalary, overtimeHours, overtimeRate);
        var calculatePerDaySalary = monthlySalary / Employee1.calculatedWorkingDays(startMonthEl.value, endMonthEl.value);
        var calculateRegularPerHourSalary = calculatePerDaySalary / 8;
        var calculateTotalOvertimeHours = overtimeHours * overtimeRate;
        var calculateTotalOvertimeAmount = calculateTotalOvertimeHours * calculateRegularPerHourSalary;
        document.getElementById('emp-salary-el').innerHTML = "<strong>$".concat(monthlySalary, "</strong> Monthly Salary");
        document.getElementById('total-working-days').innerHTML = "<strong>".concat(Employee1.calculatedWorkingDays(startMonthEl.value, endMonthEl.value), "</strong> Working Days between 16th of Previous month and 15th of Current Month");
        document.getElementById('ot-hours-worked').innerHTML = "<strong>".concat(overtimeHours, "</strong> Hours Worked on Weekend");
        document.getElementById('hours-weekend-multi-ot-rate').innerHTML = "<strong>".concat(calculateTotalOvertimeHours.toFixed(2), "</strong> Hours with OT Rate");
        document.getElementById('total-ot-hours-amount').innerHTML = "<strong>$".concat(calculateTotalOvertimeAmount.toFixed(2), "</strong> Earned as OT");
    }
    else {
        var errorToast = document.querySelector('#toast-danger');
        errorToast.style.opacity = '1';
        setTimeout(function () {
            document.querySelector('#toast-danger').style.opacity = '0';
        }, 3000);
    }
});
//# sourceMappingURL=tsc.js.map