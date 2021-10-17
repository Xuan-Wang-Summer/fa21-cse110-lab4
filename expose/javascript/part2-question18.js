function printT() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
let intervalID = setInterval(printT, 1000);
