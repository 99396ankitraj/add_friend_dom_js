let change=document.querySelector("h3");
let remove=document.querySelector(".rm");
let add=document.querySelector(".ad");

add.addEventListener("click",function(){
    change.innerHTML="Friends";
})
remove.addEventListener("click",function(){
    change.innerHTML="Stranger";
})



