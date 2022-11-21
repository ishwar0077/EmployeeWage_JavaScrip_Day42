const IS_PART_TIME=0;
const IS_FULL_TIME=1;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;

const NUM_OF_WORKING_DAY=20;
const MAX_HRS_IN_MONTH=160;
let total_emp_hrs=0;
let totalWorkingDays=0;
let empDailyWageArray=[];

function GetWorkingHours(empCheck)
{
    switch(empCheck)
{
    case IS_PART_TIME:
        return PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
}
}


function CalculateDailyWage(Emphrs)
{
return empHrs*WAGE_PER_HOURS;
}

let empHrs=0;
while(total_emp_hrs<MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAY)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=GetWorkingHours(empCheck);
    total_emp_hrs+=empHrs;
    empDailyWageArray.push(CalculateDailyWage(empHrs));
   

}

//empHrs=GetEmpWage();
let empWage=CalculateDailyWage(total_emp_hrs);
console.log(empDailyWageArray);
console.log("UC7 - Total Days: "+totalWorkingDays +"Total Hours: "+ total_emp_hrs + "Employee wage: "+empWage);
