// Get current date
const currentDate = new Date();

// Calculate the desired dates (16th of previous month and 15th of current month)
const previousMonth = new Date(currentDate);
previousMonth.setMonth(previousMonth.getMonth() - 1);
previousMonth.setDate(17);

const currentMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  16
);

// Format the dates as strings in YYYY-MM-DD format
const previousMonthString = previousMonth.toISOString().split('T')[0];
const currentMonthString = currentMonth.toISOString().split('T')[0];

// Set default values for the input fields
document.getElementById('startMonth').value = previousMonthString;
document.getElementById('endMonth').value = currentMonthString;

function getWorkingDays(startDate, endDate) {
  // Convert input strings to Date objects
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  // Initialize variables
  let totalWorkingDays = 0;

  // Loop through each day between start and end dates
  for (
    let date = startDate;
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    // Check if the current day is a weekend (Saturday or Sunday)
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      // Increment total working days if it's not a weekend
      totalWorkingDays++;
    }
  }

  return totalWorkingDays;
}

const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
  const startMonth = document.getElementById('startMonth').value;
  const endMonth = document.getElementById('endMonth').value;
  const monthlySalary = document.getElementById('monthlySalary').value;
  const overtimeHours = document.getElementById('overtimeHours').value;
  const overtimeRate = document.getElementById('overtimeRate').value;

  if (
    startMonth &&
    endMonth &&
    monthlySalary &&
    overtimeHours &&
    overtimeRate
  ) {
    const employeeTotalDaysWorked = getWorkingDays(startMonth, endMonth);
    const calculatePerDaySalary = monthlySalary / employeeTotalDaysWorked;
    const calculateRegularPerHourSalary = calculatePerDaySalary / 8;
    const calculateTotalOvertimeHours = overtimeHours * overtimeRate;
    const calculateTotalOvertimeAmount =
      calculateTotalOvertimeHours * calculateRegularPerHourSalary;

    document.getElementById(
      'emp-salary-el'
    ).innerHTML = `<strong>$${monthlySalary}</strong> Monthly Salary`;
    document.getElementById(
      'total-working-days'
    ).innerHTML = `<strong>${employeeTotalDaysWorked}</strong> Working Days between 16th of Previous month and 15th of Current Month`;

    document.getElementById(
      'ot-hours-worked'
    ).innerHTML = `<strong>${overtimeHours}</strong> Hours Worked on Weekend`;

    document.getElementById(
      'hours-weekend-multi-ot-rate'
    ).innerHTML = `<strong>${calculateTotalOvertimeHours.toFixed(
      2
    )}</strong> Hours with OT Rate`;

    document.getElementById(
      'total-ot-hours-amount'
    ).innerHTML = `<strong>$${calculateTotalOvertimeAmount.toFixed(
      2
    )}</strong> Earned as OT`;
  } else {
    alert('All fields are required');
  }
});
