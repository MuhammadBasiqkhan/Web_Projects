gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "21vh",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
});

gsap.to("#main" , {
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -30%",
    end:"top -100%",
    scrub:2
  }
})


let curser = document.querySelector(".displaycontainer")
let maincursor = document.querySelector(".dot")
document.addEventListener("mousemove", (e) => {
  // console.log(e)
  curser.style.left = e.x -150 + "px"
  curser.style.top = e.y -150+ "px"
  maincursor.style.left = e.x +20 + "px"
  maincursor.style.top = e.y + "px"


}
)
let navelements = document.querySelectorAll(".firstelement h1")

navelements.forEach(element => {

  element.addEventListener("mouseenter" , (params) => {
    maincursor.style.scale= 3
    maincursor.style.border = "1px solid white"
    maincursor.style.backgroundColor = "transparent"
    
  })

  element.addEventListener("mouseleave" , (params) => {
    maincursor.style.scale= 1
    maincursor.style.border = "1px solid #95C11E"
    maincursor.style.backgroundColor = "#95C11E"
  })
});











function swiper() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

swiper()



gsap.from(".sectiontwo .aboutsect1,.aboutsect2", {
   y:50,
   opacity:0,
   duration:1,
  //  stagger:0.4,
   scrollTrigger:{
    trigger:".sectiontwo",
    scroller:"body",
   
    start:"top 60%",
    end:"top 58%",
    scrub:3,
   }
})
gsap.from("#page3", {
    y:50,
    scale:0.9,
   opacity:0,
   duration:1,
   stagger:0.5,
   scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    
    start:"top 60%",
    end:"top 58%",
    scrub:3,
   }
})




gsap.from("#page4", {
   y:50,
   
   opacity:0,
   duration:1,
  //  stagger:0.5,
   scrollTrigger:{
    trigger:"#page4",
    scroller:"body",
   
    start:"top 60%",
    end:"top 58%",
    scrub:3,
   }
})


gsap.from(".clon1", {
   y:-70,
   x:-70,
   duration:1,
  //  stagger:0.5,
   scrollTrigger:{
    trigger:".clon1",
    scroller:"body",
    start:"top 55%",
    end:"top 50%",
    scrub:4,
   }
})
gsap.from(".clon2", {
   y:70,
   x:70,
   duration:1,
  //  stagger:0.5,
   scrollTrigger:{
    trigger:".clon1",
    scroller:"body",
    start:"bottom 60%",
    end:"bottom 55%",
    scrub:3,
   }
})
gsap.from(".pagesectionone h2", {
   y:50,

   scrollTrigger:{
    trigger:".clon2",
    scroller:"body",
    start:"bottom 75%",
    end:"bottom 70%",
    scrub:4,
   }
})


let content = [
  {
    cont:"Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close."
  },
  {
    cont:"Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️"
  },
  {
    cont:"Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been."
  },
  {
    cont:"Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽"
  },
  {
    cont:"Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!"
  },
  {
    cont:"I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!"
  },

]

let coounter =0

let changeelemtn = document.querySelector(".changecontent")

setInterval(() => {
  if(coounter===content.length){
    coounter=0
  }
  changeelemtn.innerText = `${content[coounter].cont}`
  coounter++
}, 5000);




let displaychnger = document.querySelector(".displaychanger")
let dispalymenu = document.querySelector(".maenudisplay")

let flag = 0
displaychnger.addEventListener("click" , (params) => {
  if(flag=== 0 ){
    displaychnger.src = "./images/first_set_icon_part_3-20-512.png"
    dispalymenu.style.opacity = 1
    flag=1
  }
  else{
    displaychnger.src = "./images/menu-icon-19352.png"
    dispalymenu.style.opacity = 0
    flag=0
  }
}
)