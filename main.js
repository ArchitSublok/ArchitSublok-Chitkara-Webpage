let bt=document.querySelector(".button");
bg="white"

bt.addEventListener('click',()=>{
    if (bg=="white"){
    document.querySelector("body").style.backgroundColor="black";
    }
    else if (bg=="black"){
    document.querySelector("body").style.backgroundColor="white";
    }

})