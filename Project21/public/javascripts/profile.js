let maindisplay = document.querySelector(".maindisplay")
let crossmark = document.querySelector(".cross")
let uploadbtn = document.querySelector(".btnupload")
let imageediticon = document.querySelector(".containedelement")
let imgaeinput = document.querySelector("#imagedata input")
let uploadimage = document.querySelector("#imagedata")
let savedpost = document.querySelector(".leftbox")
let userpost = document.querySelector(".rightbox")
let userpostcards = document.querySelector(".cards")
let savedpostcards = document.querySelector(".cards2")
let registerationinfo = document.querySelector(".alert")
let cnclbtn = document.querySelector(".tickmark")
 let displayprofile = document.querySelector(".displayUserdata")
let profileimage = document.querySelector("#profileiamge")


cnclbtn.addEventListener("click" ,(params) => {
   registerationinfo.style.display = "none";
}
)

savedpost.addEventListener("click" , (params) => {
  savedpost.style.borderBottom  = "2px solid green"
  userpost.style.borderBottom  = "none"
  userpostcards.style.display  = "flex"
  savedpostcards.style.display  = "none"
}
)
userpost.addEventListener("click" , (params) => {
  

  userpost.style.borderBottom  = " 2px solid green"
  savedpost.style.borderBottom  = "none"
  userpostcards.style.display  = "none"
  savedpostcards.style.display  = "flex"
}
)

imageediticon.addEventListener("click" , (params) => {
   imgaeinput.click()
}
)


imgaeinput.addEventListener("change" , (params) => {
   uploadimage.submit()
}
)


uploadbtn.addEventListener("click" , () => {
   maindisplay.style.display="flex"
   maindisplay.style.opacity=1

}
)
crossmark.addEventListener("click" , () => {
   maindisplay.style.display="none"
   maindisplay.style.opacity=0

}
)




let flag = 0
profileimage.addEventListener("click" , (params) => {
    if(flag===0){
        displayprofile.style.display= "flex"
        flag++ 
    }
    else{
        
        displayprofile.style.display= "none"
        flag--
    }


}
)
