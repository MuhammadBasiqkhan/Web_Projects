let element = document.querySelectorAll(".elem")
let container = document.querySelectorAll(".container")

for (let index = 0; index < container.length; index++) {
    const elem = container[index];

   
   
    elem.addEventListener("mouseenter" , (e) => {
    

       let image = elem.childNodes[3]
       image.style.opacity= 1
       elem.addEventListener("mousemove" , (e) => {
        let image = elem.childNodes[3]
        image.style.left = e.x+"px"
        // image.style.bottom = e.y+"px"
    }
    )
    }
    )
    elem.addEventListener("mouseleave" , (e) => {
        
       
         image = elem.childNodes[3]
       image.style.opacity= 0
    }
    )
    
}