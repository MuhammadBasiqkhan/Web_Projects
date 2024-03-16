let add = document.getElementById("add")
let del = document.getElementById("remove")
let text = document.querySelector("p")
let bton = document.querySelector(".btn")

let flag =0
add.addEventListener("click", () => {
    if(flag==0){
        text.textContent= "Friend"
        add.textContent="Remove Friend"
        text.style.color="red"
        del.style.display="none"
        flag=1
    }

    else{
        text.textContent= "Stranger"
        add.textContent="Add Friend"
        text.style.color="black"
        del.style.display="inline"
        flag=0
    }
})
del.addEventListener("click", () => {
    alert("you want to delete a Friend Request ")
})
