function butfunop(){
    document.getElementById("butop").style="display:none;";
    document.getElementById("butcl").style="display:flex;";
    document.querySelector(".boxz1").style="display:flex;right: 1vw;bottom: 40vh;";
    document.querySelector(".boxz2").style="display:flex;right: 1vw;bottom: 30vh;";
    document.querySelector(".boxz3").style="display:flex;right: 1vw;bottom: 20vh;";
}
function butfuncl(){
    document.getElementById("butop").style="display:flex;";
    document.getElementById("butcl").style="display:none;";
    document.querySelector(".boxz1").style="display:none;";
    document.querySelector(".boxz2").style="display:none;";
    document.querySelector(".boxz3").style="display:none;";
}