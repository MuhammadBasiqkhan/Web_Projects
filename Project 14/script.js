let dragcontainer = document.getElementsByClassName("cont")
let drop1cont = document.getElementById("container1")
let drop2cont = document.getElementById("container2")

for (let index = 0; index < dragcontainer.length; index++) {
    const element = dragcontainer[index];
    element.addEventListener("dragstart", function(e){
        let selected = e.target;

        drop2cont.addEventListener("dragover" , function(e){
            e.preventDefault()
        })

        drop2cont.addEventListener("drop" , function(e){
            drop2cont.appendChild(selected)
            selected = null
        })

        drop1cont.addEventListener("dragover" , function(e){
            e.preventDefault()
        })

        drop1cont.addEventListener("drop" , function(e){
            drop1cont.appendChild(selected)
            selected = null
        })
    });


   
}
