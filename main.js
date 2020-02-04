function myFunction() {
    setTimeout(function() {
    var myName = document.querySelector("#nameintro");
        myName.textContent = "Alexis Harris";
        myName.style.fontSize = "50px";
        var backgroundcredit = document.querySelector(".backgroundcredit");
        backgroundcredit.textContent = "Photo by Annie Spratt on Unsplash";
        backgroundcredit.style.color = "rgb(66, 66, 66)";
        backgroundcredit.style.opacity = .3;
        backgroundcredit.style.textAlign = "bottom";
        backgroundcredit.style.fontSize = "10px";
        console.log("yay");
    }, 6000);
}


function myFunction2() {
    setTimeout(function(){
        document.querySelector("#box2").style.display = "grid";
    }, 2500);

    setTimeout(function(){
        document.querySelector("#box3").style.display = "grid";
    }, 3000);

    setTimeout(function(){
        document.querySelector("#box4").style.display = "grid";
    }, 3500);

    setTimeout(function(){
        document.querySelector("#box5").style.display = "grid";
    }, 4000);

    setTimeout(function(){
        document.querySelector("#box6").style.display = "grid";
    }, 4500);

    setTimeout(function(){
        document.querySelector("#box7").style.display = "grid";
    }, 5000);

    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "#D3D3D3";
    }, 5500);

    setTimeout(function(){
        document.querySelector(".backgroundcredit").style.display = "grid";
    }, 5500); 
}

myFunction()
myFunction2()


// window.onload = function() {
//     myFunction()
//     myFunction2()
//     var reloading = sessionStorage.getItem("reloading");
//     if (reloading) {
//         sessionStorage.removeItem("reloading");
//         myFunction();
//     }
// }

function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}


function mouseMove() {
    var x = event.pageX;
    var y = event.pageY;
    var cursor = document.querySelector("#cursor");
   cursor.style.left = x-15 + "px";
   cursor.style.top = y-15 + "px"; 
}
function clickColor() {
    var cursor = document.querySelector("#cursor"); 
    cursor.style.color = "rgb(63, 63, 63)";
    console.log("working");
}

function releaseColor() {
    var cursor = document.querySelector("#cursor");
    cursor.style.color = "black";
}

$(function() {
    $("h1").draggable();
});

$(function() {
    $("#nameintro").draggable();
});