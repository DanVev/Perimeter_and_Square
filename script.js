/**
 * Created by User on 29.12.2016.
 */

function check() {
    document.getElementById("per").innerText = "";
    document.getElementById("sq").innerText = "";
    var a = parseFloat(document.input_data.a.value);
    var b = parseFloat(document.input_data.b.value);
    var c = parseFloat(document.input_data.c.value);
    if ((((a + b) > c) && ((b + c) > a) && ((c + a) > b) && (a > 0) && (b > 0) && (c > 0)))
        calculate(a, b, c);
    else {
        alert("Incorrect data! Try again");
        reset()
    }
}
function reset() {
    document.getElementById("per").innerText = "";
    document.getElementById("sq").innerText = "";
    document.input_data.a.value = "";
    document.input_data.b.value = "";
    document.input_data.c.value = "";
}
function calculate(a, b, c) {
    var p = (a + b + c) / 2;
    var square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    document.getElementById("per").innerText = 2 * p;
    document.getElementById("sq").innerText = square;
}
