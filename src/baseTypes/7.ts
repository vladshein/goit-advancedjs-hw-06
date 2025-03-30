/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum dayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY
}

function isWeekend(day: dayOfWeek) :boolean {
  if (day === dayOfWeek.SUNDAY || day === dayOfWeek.SATURDAY) {
    return true;  
  }
  
  return false;
}