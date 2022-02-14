let siup= document.getElementById("siup");
let icon= document.getElementById("icon");
let sin= document.getElementById("sin");
let icon1= document.getElementById("icon1");
let mode= document.getElementById("mode");
let section3 = document.getElementById("section3");
siup.addEventListener("click", function()
{
    document.querySelector(".box").style.display="block";
})
icon.addEventListener("click", function()
{
    document.querySelector(".box").style.display="none";
})

sin.addEventListener("click", function()
{
    document.querySelector("#box").style.display="block";
})
icon1.addEventListener("click", function()
{
    document.querySelector("#box").style.display="none";
})

mode.addEventListener("click", function()
{
    section3.classList.toggle("darkmode");
})
mode.addEventListener("click", function()
{
    mode.classList.toggle("dark");  
})







