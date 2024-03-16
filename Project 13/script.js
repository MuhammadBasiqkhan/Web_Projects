let searching = document.getElementById("searching")//button 
let searchbox = document.getElementById("searchbox")
let searhimage = document.getElementById("searchimage")
let showmore = document.getElementById("showmore") // show more button


searching.addEventListener("click", () => {
    pages=1
    geting();
   
});
showmore.addEventListener("click", () => {
    pages++
    geting();
});

let keyword = "";
const apikey = "ePSaWnEQvgVGXcBfbJWFsxrSkZa9bFdxM9iA8qvDeGE";
let pages = 1;

async function geting(){
    let keyword= searchbox.value;
   
    url =`https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=${apikey}&per_page=12`;

    const resposne = await fetch(url);
    const data = await resposne.json();
   

    if(pages===1){
        searhimage.innerHTML=""
    }
    const result = data.results;

    result.forEach((res) => {
        let cont = document.createElement("div");
        let ancher = document.createElement("a");
        cont.className = "container";
        cont.style.background = `url(${res.urls.small})`;
        cont.style.backgroundSize = "cover"; 
        cont.style.backgroundPosition = "center"; 
        ancher.href=res.links.html;
        ancher.target = "_blank";
        cont.appendChild(ancher);
        searhimage.appendChild(cont);
    });

    // Show the "showmore" button after all containers are created
    showmore.style.display = "flex";
}
