const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

setInterval(function updateDateTime() {
  const day = document.querySelector(".day");
  const date = document.querySelector(".time");
  const now = new Date();
  day.textContent = days[now.getDay()];
  date.textContent = `${now.getTime()}ms`;
}, 1);
