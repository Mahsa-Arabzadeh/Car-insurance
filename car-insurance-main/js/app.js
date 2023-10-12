// Variables
const form = document.querySelector("#request-quote");

// Events
document.addEventListener("DOMContentLoaded", afterLoad);
document.addEventListener("submit", submitForm);

// Functions
function afterLoad() {
  displayYears();
}

function submitForm(e) {
  e.preventDefault();
  const make = document.querySelector("#make").value;
  const year = document.querySelector("#year").value;
  const level = document.querySelector('input[name="level"]:checked').value;
  if (make === "" || year === "" || level === "") {
    displayMsg("لطفاً مقادیر فرم را با دقت پر نمایید. با تشکر");
  } else {
    const insuranceCase = {
      make: make,
      year: year,
      level: level,
    };
    const price = calculatePrice(insuranceCase);
    displayResult(price);
  }
}

function calculatePrice(info) {
  let base = 2000000;
  const make = info.make;
  let price = 0;
  switch (make) {
    case "1":
      price = base * 1.15;
      break;
    case "2":
      price = base * 1.3;
      break;
    case "3":
      price = base * 1.8;
      break;
  }
  const yearsDifference = getYearDifference(info.year);
  price -= ((yearsDifference * 3) / 100) * price;
  return price;
}

function getYearDifference(year) {
  const currentYear = new Date().toLocaleDateString("fa-IR").slice(0, 4);
  const maxYear = parseInt(currentYear);
  const selectedYear = parseInt(year);
  return maxYear - selectedYear;
}

function displayMsg(msg) {
  const messageBox = document.createElement("div");
  messageBox.classList = "error";
  messageBox.innerText = msg;
  form.insertBefore(messageBox, document.querySelector(".form-group"));
  setTimeout(() => {
    document.querySelector(".error").remove();
  }, 5000);
}

function displayYears() {
  const selectYear = document.querySelector("#year");
  const optionTag = document.createElement("option");
  optionTag.innerText = `- انتخاب -`;
  selectYear.appendChild(optionTag);
  const currentYear = new Date().toLocaleDateString("fa-IR").slice(0, 4);
  const maxYear = parseInt(currentYear);
  const minYear = maxYear - 20;
  for (let i = maxYear; i >= minYear; i--) {
    const optionTag = document.createElement("option");
    optionTag.value = i;
    optionTag.innerText = `سال ${i}`;
    selectYear.appendChild(optionTag);
  }
}

function displayResult(price) {}
