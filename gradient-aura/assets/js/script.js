const h = document.querySelector(".h");
const m = document.querySelector(".m");
const s = document.querySelector(".s");
const pmAm = document.querySelector(".pm-am");


function showTime() {
    let time = new Date();
    h.innerText = time.getHours();
    m.innerText = time.getMinutes();
    s.innerText = time.getSeconds();
    if (time.getHours() < 10) {
        h.innerText = "0"+ time.getHours();
    }
    if (time.getMinutes() < 10) {
        m.innerText = "0"+ time.getMinutes();
    }
    if (time.getSeconds() < 10) {
        s.innerText = "0"+ time.getSeconds();
    }
}
showTime()
setInterval(() => {
    showTime()
}, 1000);