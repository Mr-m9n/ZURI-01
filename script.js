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

const dayDisplay = days[defaultDate.getDay()];
const dateDisplay = `${defaultDate.getUTCMilliseconds()}ms`;

function updateDateTime() {
  day.textContent = dayDisplay;
  date.innerHTML = dateDisplay;
}
// Update every milliseconds
window.setInterval(updateDateTime, 1);
