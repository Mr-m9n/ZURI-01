const day = document.querySelector(".day");
const date = document.querySelector(".date");
const defaultDate = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateDateTime() {
  day.textContent = days[defaultDate.getDay()];
  date.textContent = `${Math.ceil(defaultDate.getMilliseconds())}ms`;
}

setInterval(updateDateTime, 1);
