
const buttonShow = document.getElementById('show');
const buttonExit = document.getElementById('exit');

buttonShow.addEventListener('click', ()=>{
    document.querySelector(".slider").style.zIndex = "10";
    document.querySelector(".slider").style.opacity="1";

})
buttonExit.addEventListener('click', ()=>{
    const slider = document.querySelector(".slider").style.zIndex = "-1";
    document.querySelector(".slider").style.opacity="0";

})
