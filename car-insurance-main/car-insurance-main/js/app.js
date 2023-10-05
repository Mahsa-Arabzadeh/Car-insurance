// Variables
const creatDate = document.querySelector(".creat-date");
const carModel = document.querySelector(".car-model");
const carPrice = document.querySelector(".car-price");
const submitBtn = document.querySelector(".submit");
const resultFactor = document.querySelector("#result");
const inputCar = document.querySelector("#make");
const year = document.querySelector("#year");

// Events
submitBtn.addEventListener("click", showFactor);
// Functions
// User Interface Functions
// Show Years
function displayYears() {
  // Convert to number
  let persianNumbers = [
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
    ],
    arabicNumbers = [
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
    ],
    fixNumbers = function (str) {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return parseInt(str);
    };

  // get now years
  let curentYear = new Date().toLocaleDateString("fa-IR");

  // Slice date
  curentYear = curentYear.slice(0, 4);

  // get max year
  let maxYear = fixNumbers(curentYear);
  console.log(maxYear);

  // get min year
  let minYear = maxYear - 20;
  console.log(minYear);

  const inputYear = document.querySelector("#year");
  let bacePrice = 2000000;
  let pridePrice = bacePrice * 1.15;
  for (let i = maxYear; i >= minYear; i--) {
    let optionTag = document.createElement("option");
    optionTag.value = i;
    optionTag.innerText = `${i}`;
    inputYear.appendChild(optionTag);
    pridePrice *= 0.005;
    carPrice.innerText = pridePrice;
    creatDate.innerText = optionTag.value;
  }
}

displayYears();

function showFactor() {
  if (inputCar.value == "" || year.value == "") {
    return alert("Enter the information");
  } else {
    resultFactor.style.display = "block";
  }
}
