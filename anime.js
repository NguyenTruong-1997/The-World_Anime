let menuBtn = document.getElementById("menuBtn");
let sideBar = document.getElementById("sideBar");
let menu = document.getElementById("menu");

sideBar.style.right = "-250px";

menuBtn.onclick = function() {
    if (sideBar.style.right == "-250px") {
        sideBar.style.right = "0";
        menu.src = "./images/close.png";
    } else {
        sideBar.style.right = "-250px";
        menu.src = "./images/menu.png";
    }
}

let first = document.getElementById("first");
let firstArrow = document.getElementById("firstArrow")
let second = document.getElementById("second");
let secondArrow = document.getElementById("secondArrow");
let third = document.getElementById("third");
let thirdArrow = document.getElementById("thirdArrow");
let descImg = document.getElementById("descImg");

first.onclick = function() {
    descImg.src = "./images/EYNBjB3.jpg"
    firstArrow.style.visibility = "visible";
    secondArrow.style.visibility = "hidden";
    thirdArrow.style.visibility = "hidden";
}

second.onclick = function() {
    descImg.src = "./images/tVVhSG4.jpg"
    firstArrow.style.visibility = "hidden";
    secondArrow.style.visibility = "visible";
    thirdArrow.style.visibility = "hidden";
}

third.onclick = function() {
    descImg.src = "./images/wzvlyi3.jpg"
    firstArrow.style.visibility = "hidden";
    secondArrow.style.visibility = "hidden";
    thirdArrow.style.visibility = "visible";
}