let editbtn = document.querySelectorAll(".edit")
let detaildata = document.querySelectorAll(".title")

editbtn.forEach((element , index) => {
    element.addEventListener("click" , (params) => {
    detaildata[index].removeAttribute("readonly");
    detaildata[index].style.color = "#555";
    }
    )
});