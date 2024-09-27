let body = document.getElementsByTagName("body")[0];
let hsvValue = 1;

setInterval(() => {
    body.style.backgroundColor = 'hsl(' + hsvValue + ',100%,50%)';
    if (hsvValue > 360) {
        hsvValue = 0;
    }
    hsvValue++;
}, 100)