
let curser = document.querySelector(".cont")

document.addEventListener("mousemove" , (e) => {
  
  curser.style.left= e.x +"px"
  curser.style.top= e.y +"px"
 

}
)