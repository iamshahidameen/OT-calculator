// Get current date
const currentDate: Date = new Date()

// Calculate the desired dates (16th of previous month and 15th of current month)
const previousMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 17);
const currentMonth: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    16
  );

  // Format the dates as strings in YYYY-MM-DD format
const previousMonthString: string = previousMonth.toISOString().split('T')[0];
const currentMonthString: string = currentMonth.toISOString().split('T')[0];

// Set default values for the input fields
const startMonthEl = (document.getElementById('startMonth') as HTMLInputElement)
startMonthEl.value = previousMonthString;
const endMonthEl = (document.getElementById('endMonth') as HTMLInputElement)
endMonthEl.value = currentMonthString;

class Employee {

    baseSalary: number;
    otHours: number;
    otRate: number;

    constructor(baseSalary: number, otHours: number, otRate: number){
        this.baseSalary = baseSalary;
        this.otHours = otHours;
        this.otRate = otRate;
    }


    calculatedWorkingDays(startDate:any, endDate: any) {
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

}



const submit = document.getElementById('submit') as HTMLButtonElement;
submit.addEventListener('click', () => {
    const monthlySalary = parseFloat((document.getElementById('monthlySalary') as HTMLInputElement).value)
    const overtimeHours = parseFloat((document.getElementById('overtimeHours') as HTMLInputElement).value)

    const overtimeRate = parseFloat((document.getElementById('overtimeRate') as HTMLInputElement).value)

    if (
        startMonthEl.value &&
        endMonthEl.value &&
        monthlySalary &&
        overtimeHours &&
        overtimeRate
      ) {
        const Employee1 = new Employee(monthlySalary, overtimeHours, overtimeRate)
        const calculatePerDaySalary:number  = monthlySalary / Employee1.calculatedWorkingDays(startMonthEl.value, endMonthEl.value)
        const calculateRegularPerHourSalary:number = calculatePerDaySalary / 8;
        const calculateTotalOvertimeHours: number = overtimeHours * overtimeRate;
        const calculateTotalOvertimeAmount: number =
        calculateTotalOvertimeHours * calculateRegularPerHourSalary;
        document.getElementById(
            'emp-salary-el'
          ).innerHTML = `<strong>$${monthlySalary}</strong> Monthly Salary`;
          document.getElementById(
            'total-working-days'
          ).innerHTML = `<strong>${Employee1.calculatedWorkingDays(startMonthEl.value, endMonthEl.value)}</strong> Working Days between 16th of Previous month and 15th of Current Month`;
      
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
        document.querySelector(
            '#toast-danger .toast-text'
          ).innerHTML = `All Fields are Required`;
          (document.querySelector(
            '#toast-danger'
          ) as HTMLElement).style.display = 'flex'

          setTimeout(()=>{
            (document.querySelector(
                '#toast-danger'
              ) as HTMLElement).style.display = 'none'
          }, 3000)
    // alert('All fields are required');
        
      }
 
})