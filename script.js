var leftBtn=document.querySelector(".left-arrow");
var rightBtn=document.querySelector(".right-arrow")
leftBtn.addEventListener("click",pageTransition);
rightBtn.addEventListener("click",pageTransition);

function pageTransition(){
    console.log("hello");
    var page1=document.querySelector(".section1");
    var page2=document.querySelector(".page2");
    page1.classList.toggle("show");
    page2.classList.toggle("show");
}
