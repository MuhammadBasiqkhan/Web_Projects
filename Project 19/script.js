const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let positionelement = document.querySelectorAll(".positionelement");
let picturecontainer = document.querySelector(".picturecontainer");

let pictures = [
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1643_Copy%2520of%2520DSC04080-p-1600.webp" },
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp" },
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180-p-1600.webp" },
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%2520of%2520Nike_Soho_50th_SU22_FL1_6176-p-1600.webp" },
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388-p-1600.webp" },
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%2520of%2520Nike_Soho_AMD21_0781_LORES-p-1600.webp" },
    { img: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b170f_IMG_3845-p-1600.webp" },
];

positionelement.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
        picturecontainer.style.display = "block";
        
            picturecontainer.style.backgroundImage = `url(${pictures[index].img})`;
    });

    element.addEventListener("mouseleave", () => {
        picturecontainer.style.display = "none";
    });
});



let data=[
    {content:"Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
     image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project-p-1080.jpg"
},
    {content:"Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
    image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d0_Project.webp"
},
    {content:"We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
    image:"https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15cd_Execution-p-1080.jpg"
},
]

let dandacontent = document.querySelectorAll(".displatcoontent");
let contcontent = document.querySelector(".maincontainer");
let backimage = document.querySelector(".rightsidebalckcontainer");

dandacontent.forEach((element, index) => {
    element.addEventListener("click", () => {

      
            contcontent.innerHTML=`<p>${data[index].content}</p>`
            backimage.style.backgroundImage = `url(${data[index].image})`
        

        if (index === 0) {
            element.children[0].style.backgroundColor = "#FE3B0D";
            element.children[1].firstElementChild.style.color = "rgb(211, 211, 211)";
            dandacontent[index + 1].children[0].style.backgroundColor = "#504A45";
            dandacontent[index + 2].children[0].style.backgroundColor = "#504A45";

            dandacontent[index + 1].children[1].firstElementChild.style.color = "#504A45";
            dandacontent[index + 2].children[1].firstElementChild.style.color = "#504A45";
        } else if (index === dandacontent.length - 1) {
            element.children[0].style.backgroundColor = "#FE3B0D";
            element.children[1].firstElementChild.style.color = "rgb(211, 211, 211)";
            dandacontent[index - 1].children[0].style.backgroundColor = "#504A45";
            dandacontent[index - 2].children[0].style.backgroundColor = "#504A45";
            dandacontent[index - 1].children[1].firstElementChild.style.color = "#504A45";
            dandacontent[index - 2].children[1].firstElementChild.style.color = "#504A45";
        } else {
            element.children[0].style.backgroundColor = "#FE3B0D";
            element.children[1].firstElementChild.style.color = "rgb(211, 211, 211)";
            dandacontent[index - 1].children[0].style.backgroundColor = "#504A45";
            dandacontent[index + 1].children[0].style.backgroundColor = "#504A45";

            dandacontent[index + 1].children[1].firstElementChild.style.color = "#504A45";
            dandacontent[index - 1].children[1].firstElementChild.style.color = "#504A45";
        }
    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
   
  });


  let area = document.getElementById("page5");
  let goolaelement = document.querySelector(".goolscsirculation");

  
  area.addEventListener("mouseenter", (e) => {
      goolaelement.style.display = "flex";
   
      area.style.cursor = "none"
    
  
     
  });
  
  area.addEventListener("mouseleave", (e) => {
      goolaelement.style.display = "none";
     
     
  });
  
  window.addEventListener("mousemove", (e) => {
    goolaelement.style.left = e.clientX + "px";
    goolaelement.style.top = e.clientY + "px";
  });


  let mnenutbn1 = document.querySelector(".navmenu")
  let displaymenu = document.querySelector(".displaynavbar")
  let navmenubtn = document.querySelector(".navmenubtn")

  mnenutbn1.addEventListener("click" , (e) => {
    displaymenu.style.top = 0+"vh"
  }
  )


  navmenubtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Stop event propagation
    displaymenu.style.top = -200 + "vh";
  });


  let displafirstelement = document.querySelector(".displayfirst");
  let arr = ["Environments", "Experiences", "Content"];
  let count = 0;
  
  function displayscreen() {
      let textellement = document.createElement("h1");
      textellement.classList.add("gradient-text");
      
      setInterval(() => {
          textellement.innerText = `${arr[count]}`;
          
          if (count === arr.length) {
            textellement.innerText = "";
          }

          displafirstelement.appendChild(textellement)
          count++;
      }, 1200);
  
      setTimeout(() => {
          displafirstelement.style.top = -100 + "%";
      }, 5000);
  }


window.onload = displayscreen
  