var start;
var rightButton=document.getElementById("right")
var stopButton=document.getElementById("stop")
var leftButton=document.getElementById("left")

rightButton.addEventListener("click", function () {
    clearInterval(start);
    start = setInterval(right, 1000);
});

stopButton.addEventListener("click", function () {
    clearInterval(start);
});

leftButton.addEventListener("click", function () {
    clearInterval(start);
    start = setInterval(left, 1000);
});


function right() {
    var a = document.getElementById("leftText").value;
    var b = document.getElementById("rightText").value;
    document.getElementById("rightText").value = b+a.charAt(0);
    document.getElementById("leftText").value = a.slice(1);
}

function left() {
    var a = document.getElementById("leftText").value;
    var b = document.getElementById("rightText").value;
    document.getElementById("leftText").value = b.charAt(b.length-1)+a;
    document.getElementById("rightText").value = b.slice(0,b.length-1);
}