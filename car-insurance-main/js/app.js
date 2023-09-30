function convertToJalali(georgianYear) {
  // Algorithm to convert Gregorian year to Jalali (Shamsi) year
  const jalaliYear = ((georgianYear - 621) * 33) / 32;
  return Math.floor(jalaliYear);
}

function displayPast20JalaliYears() {
  // Get the current year in the Jalali calendar system
  const currentYear = convertToJalali(new Date().getFullYear());

  const showYear = document.querySelector("#year");
  // Calculate Jalali years from 20 years ago to the current year
  for (let i = currentYear - 20; i <= currentYear; i++) {
    // Showing years in DOM.
    showYear.innerHTML += `<option> ${i} </option>`;
  }
}
// Display 20 years from 1382 to 1402 in the Jalali calendar format
displayPast20JalaliYears();
