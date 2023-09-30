// Taking the current year and converting it to the jalali year.
function convertToJalali(georgianYear) {
  // Algorithm to convert Gregorian year to Jalali (Shamsi) year
  const jalaliYear = georgianYear - 622 + 1;
  return Math.floor(jalaliYear);
}

// Taking the last 20 years of the current year and showing it in the DOM.
function displayPast20JalaliYears() {
  // Get the current year in the Jalali calendar system
  const currentYear = convertToJalali(new Date().getFullYear());

  const showYear = document.querySelector("#year");
  // Calculate Jalali years from 20 years ago to the current year
  for (let i = currentYear; i >= currentYear - 20; i--) {
    // Showing years in DOM.
    showYear.innerHTML += `<option> ${i} </option>`;
  }
}
// Display 20 years from 1382 to 1402 in the Jalali calendar format
displayPast20JalaliYears();
