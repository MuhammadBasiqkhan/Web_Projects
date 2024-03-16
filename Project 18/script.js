let inputdata = document.getElementById("input");
let uploaddata = document.getElementById("Upload");
let maincontainer = document.querySelector(".todocontainer");

uploaddata.addEventListener("click", () => {
    let textinput = inputdata.value;


    inputdata.value=""

    let element = document.createElement("div");
    element.classList.add("notesinputcont");

    element.innerHTML = `
        <div class="data">
            <div class="righthand">
                <i class="fa-solid fa-check tick"></i>
            </div>
            <p class="text">${textinput}</p>
        </div>
        <div class="dataend">
            <i class="fa-solid fa-xmark delete"></i>
        </div>`;

    maincontainer.appendChild(element);

    let tick = element.querySelector(".tick");
    let righthand = element.querySelector(".righthand");
    let data = element.querySelector(".text");
    let deleteelement = element.querySelector(".delete");

    righthand.addEventListener("click", () => {
        if (tick.style.display === "none") {
            tick.style.display = "block";
            righthand.classList.add("orangehand");
            data.style.textDecoration = "line-through";
        } else {
            tick.style.display = "none";
            righthand.classList.remove("orangehand");
            data.style.textDecoration = "none";
        }
    });

    deleteelement.addEventListener("click", () => {
        element.remove();
    });
});
