const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);

const wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

let windChill = Math.floor(wc);


if(speed > 3 && temp <= 50){
    let wTemp = isNaN(temp);
    let wSpeed = isNaN(speed);
    if(wTemp === "True" || wSpeed === "True"){
        document.querySelector("#chill").innerHTML = `N/A`;
    }else{
        document.querySelector("#chill").innerHTML = `${windChill}`; 
    }
}else {
    document.querySelector("#chill").innerHTML = `N/A`;
}
