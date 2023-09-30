function convertToJalali(georgianYear) {
  // Algorithm to convert Gregorian year to Jalali (Shamsi) year
  const jalaliYear = ((georgianYear - 621) * 33) / 32;
  return Math.floor(jalaliYear);
}

function displayPast20JalaliYears() {
  // Get the current year in the Jalali calendar system
  const currentYear = convertToJalali(new Date().getFullYear());

  // Calculate Jalali years from 20 years ago to the current year
  for (let i = currentYear - 20; i <= currentYear; i++) {
    console.log(i);
  }
}
// Display 20 years from 1382 to 1402 in the Jalali calendar format
displayPast20JalaliYears();
