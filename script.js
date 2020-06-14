var leftBtn=document.querySelector(".left-arrow");
var rightBtn=document.querySelector(".right-arrow")
leftBtn.addEventListener("click",pageTransition);
rightBtn.addEventListener("click",pageTransition);

var styles={
    transform:"translateX(0%)"
}

function pageTransition(){
    var page1=document.querySelector(".section1");
    var page2=document.querySelector(".page2");
    page1.classList.toggle("show");
    page2.classList.toggle("show");
    var m=document.querySelector(".section1-page2 .content1");
    Object.assign(m.style,styles);
}


//Media Query for max-width:770px

function handleNav2(mediaForNav2){
    if(mediaForNav2.matches){
        var NavlistElements=document.querySelectorAll(".main-menu li");
        NavlistElements.forEach((element)=>{
            element.classList.remove("hide");
        })
        var mainMenu=document.querySelector(".main-nav");
        var smallnav=document.querySelector(".small-nav");
        mainMenu.classList.add("hide");
        smallnav.classList.remove("hide");
    }
    else{
        var mainMenu=document.querySelector(".main-nav");
        var smallnav=document.querySelector(".small-nav");
        mainMenu.classList.remove("hide");
        smallnav.classList.add("hide");
        var mainMenu2=document.querySelector(".main-menu2");
        mainMenu2.classList.add("hide");

    }
    

}

var mediaForNav2=window.matchMedia("(max-width:770px)");
handleNav2(mediaForNav2);
mediaForNav2.addListener(handleNav2);

// Side bar
function toggleSideBar(){
    opener.classList.toggle("fa-cross");
    var mainMenu2=document.querySelector(".main-menu2");
    mainMenu2.classList.toggle("hide");
}
var opener=document.querySelector(".nav-icon-bar");
opener.addEventListener("click",toggleSideBar);
