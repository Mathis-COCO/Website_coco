var Time = setInterval(Timer, 1000);

function Timer() {
var d = new Date();
var t = d.toLocaleTimeString();
var dd = d.toISOString().slice(0, 10);
document.getElementById("current-date").innerHTML = dd;
document.getElementById("current-time").innerHTML = t;
}

function ShowTimer() {
    clearInterval(Time);
}
