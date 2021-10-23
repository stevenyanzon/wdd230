const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);

const wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

let windchill = Math.floor(wc);


if(speed > 3 && temp <= 50){
    let istemp = isNaN(temp);
    let isspeed = isNaN(speed);
    if(istemp === "True" || isspeed === "True"){
        document.querySelector("#chill").innerHTML = `N/A`;
    }else{
        document.querySelector("#chill").innerHTML = `${windchill}`; 
    }
}else {
    document.querySelector("#chill").innerHTML = `N/A`;
}
