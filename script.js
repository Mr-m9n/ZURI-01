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

day.textContent = days[defaultDate.getDay()];
date.textContent = `${Math.ceil(defaultDate.getUTCMilliseconds())}ms`;
