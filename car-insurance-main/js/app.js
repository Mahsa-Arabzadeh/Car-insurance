// Taking the current year and converting it to the jalali year.
// function convertToJalali(georgianYear) {
//   // Algorithm to convert Gregorian year to Jalali (Shamsi) year
//   const jalaliYear = georgianYear - 622 + 1;
//   return Math.floor(jalaliYear);
// }

// // Taking the last 20 years of the current year and showing it in the DOM.
// function displayPast20JalaliYears() {
//   // Get the current year in the Jalali calendar system
//   const currentYear = convertToJalali(new Date().getFullYear());

//   const showYear = document.querySelector("#year");
//   // Calculate Jalali years from 20 years ago to the current year
//   for (let i = currentYear; i >= currentYear - 20; i--) {
//     // Showing years in DOM.
//     showYear.innerHTML += `<option> ${i} </option>`;
//   }
// }
// Display 20 years from 1382 to 1402 in the Jalali calendar format
displayPast20JalaliYears();

function displayYears() {
  let(
    (persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ])
  ),
    (arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ]),
    (fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
        return str;
      }
    });
}
