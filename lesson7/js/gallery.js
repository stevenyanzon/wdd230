let lastVisit;

const milsecondstoDays = 8640000;

if ("lastVisit" in localStorage) {
  lastVisit = localStorage.getItem("lastVisit");
} else {
  lastVisit = Date.now();
}

const numberofDays = Math.round((Date.now() - lastVisit) / milsecondstoDays);

localStorage.lastVisit = Date.now();
console.log(numberofDays);

document.getElementById("daysvisit").textContent = numberofDays;

