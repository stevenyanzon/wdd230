let d = new Date();

document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

document.getElementById("currentdate").textContent = d.toLocaleDateString('en-UK', options);

