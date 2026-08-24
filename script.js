let boxes=document.getElementsByClassName("box");
console.log(boxes)
boxes[2].style.backgroundColor="aqua";
document.getElementById("lightgreen") .style.backgroundColor="lightgreen";
document.querySelector(".box").style.backgroundColor="royalblue";
console.log(document.querySelectorAll(".box"));    
document.querySelectorAll(".box")[1].style.backgroundColor="grey";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="lightyellow";
})
