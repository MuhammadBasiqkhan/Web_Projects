let divelement = document.querySelector(".imagecontainer")
let backbtn = document.getElementById("backbtn")
let nextbtn = document.getElementById("nextbtn")
let elementdetector = 0



divelement.addEventListener("wheel" , (e) => { 
    e.preventDefault()
    divelement.style.scrollBehavior = "smooth" 
    divelement.scrollLeft += e.deltaY

})

nextbtn.addEventListener("click" , (e) => { 
   
    divelement.style.scrollBehavior = "smooth" 
    divelement.scrollLeft += 1000

})
backbtn.addEventListener("click" , (e) => { 
    divelement.style.scrollBehavior = "smooth" 
    divelement.scrollLeft -= 1000

})



