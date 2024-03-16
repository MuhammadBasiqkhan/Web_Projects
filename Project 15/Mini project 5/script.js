let storybox = document.querySelector("#storypanel")
let stories = document.querySelectorAll(".stories")
let container = document.querySelector("#container2")

let arr = [
    { dp: "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1694288832191-ea6e50eb7034?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1707343843598-39755549ac9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1694337596156-ffee96affe24?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

arr.push({
    dp:"https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
})
clutter = ""
arr.forEach((element, index) => {
    clutter += `<div class="stories">
    <img src="${element.dp}" alt="" srcset="">
</div>`


})

storybox.innerHTML = clutter


//  console.log(storybox.childNodes)

 storybox.childNodes.forEach(element => {
    element.addEventListener("click" , (params) => {
       
        let profile = element.childNodes[1].currentSrc
        console.log(profile)
        container.style.display = "block"
        container.style.backgroundImage = `url(${profile})`
        setTimeout(() => {
                   container.style.display = "none"        
            }, 2000);
    }
    )
    

 })
