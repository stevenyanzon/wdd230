let d = new Date();

document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

function bannerBox() {
    
    const d = new Date();
    const today = d.getDay();
    const banner = document.querySelector("#bannerbox");
    
    if (today == 5) {
        banner.style.display = 'block';
    
    }
    
    else {
        banner.style.display = 'none';
    }
    }
    bannerBox();
