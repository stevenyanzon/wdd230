let d = new Date();

document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

document.getElementById("currentdate").textContent = d.toLocaleDateString('en-UK', options);

function bannerBox() {
    
    const n = new Date();
    const today = n.getDay();
    const banner = document.querySelector("#bannerbox");
    
    if (today == 5) {
        banner.style.display = 'block';
    
    }
    
    else {
        banner.style.display = 'none';
    }
    }
    bannerBox();


