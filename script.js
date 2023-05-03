const date = prompt("Enter your date");
const month = prompt("Enter your month");
const year = prompt("Enter your year");

const today = new Date();
const dob = new Date();

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

if (Number(month) !== Number(month)) {
  const userMonth = month.toUpperCase();
  dob.setMonth(months.indexOf(userMonth));
} else {
  const userMonth = months[month - 1];
  dob.setMonth(month - 1);
}

dob.setDate(date);
dob.setFullYear(year);

const MS = today - dob;
const remainingYears = today.getFullYear() - dob.getFullYear();

let remainingMonths = today.getMonth() - dob.getMonth();
if (remainingMonths < 0) {
  remainingMonths = remainingMonths + 11;
}

let remainingDays = today.getDate() - dob.getDate();
if (remainingDays < 0) {
  remainingDays = remainingDays + 30;
}

alert(
  remainingYears +
    " years " +
    remainingMonths +
    " months " +
    remainingDays +
    " days"
);
