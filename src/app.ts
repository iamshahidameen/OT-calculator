// Get current date
const currentDate: Date = new Date()

console.log(currentDate)

// Calculate the desired dates (16th of previous month and 15th of current month)
const previousMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 17);

console.log('prev mon', previousMonth)

const currentMonth: Date = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    16
  );

  console.log('updated ',currentMonth)

  // Format the dates as strings in YYYY-MM-DD format
const previousMonthString: string = previousMonth.toISOString().split('T')[0];
const currentMonthString: string = currentMonth.toISOString().split('T')[0];

console.log('previousMonthString ',previousMonthString)
console.log('currentMonthString ',currentMonthString)

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

    calculateWorkingDays(){

    }
    
    displayEmployee(){
        console.log('Employee Base Salary is', this.baseSalary)
    }
}

const Employee1 = new Employee(1000, 10, 1.5)

Employee1.displayEmployee()