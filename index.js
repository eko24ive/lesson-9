var h1 = document.querySelector("h1");

function Clock () {
    var date = new Date();
    date = date.toString();
    date = date.split(" ");
    h1.innerText = date[4];
}

setInterval(Clock, 1000);