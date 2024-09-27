/*js examples*/
let body = document.getElementsByClassName("background")[0];
let hsvValue = 1;

setInterval(() => {
    body.style.backgroundColor = 'hsl(' + hsvValue + ',100%,50%)';
    if (hsvValue > 360) {
        hsvValue = 0;
    }
    hsvValue++;
}, 100)

let leftArrow = document.getElementById("clock-left-arrow");
let clock = document.getElementById("clock");
leftArrow.addEventListener("click", () => {

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
});
/*js examples end*/