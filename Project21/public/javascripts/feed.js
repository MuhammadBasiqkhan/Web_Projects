let posttext = document.querySelectorAll(".postText")
let postimage = document.querySelectorAll(".postimage")
let username = document.querySelectorAll(".username")
let Savebtn = document.querySelectorAll(".save")
let savedailogbx = document.querySelectorAll(".displaydailogbox")
let postdata= document.querySelectorAll(".column")
let postfullscreen= document.querySelectorAll(".datamanagerdisplay")
let cancelscreen= document.querySelectorAll(".cancelscreen")
let yes= document.querySelectorAll(".yes")
let no= document.querySelectorAll(".no")
let alert = document.querySelector(".alert")




Savebtn.forEach((element , index) => {
    element.addEventListener("click" , (params) => {

        savedailogbx[index].style.display="flex"
        postfullscreen[index].style.opacity = 0;
        // postdata[index].style.display = "none";  
    

    }

    )  

    yes[index].addEventListener("click" , (params) => {
          var data = {
        username: username[index].innerText ,
        PostText: posttext[index].innerText,
        postimage:postimage[index].src
    };

    // Configure the request
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch('/save', requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Server response:', data);
        alert.style.right = 0
    setTimeout(() => {
        alert.style.right = -100 +"%"
    }, 2000);
   
        // Handle server response if needed
    })
    .catch(error => {
        console.error('There was a problem with the request:', error);
    });
    savedailogbx[index].style.display="none"
    postfullscreen[index].style.opacity = 1;
    postfullscreen[index].style.display = "none"
    Savebtn[index].style.display = "none"

  
  
    

    }
    )
    no[index].addEventListener("click" , (params) => {
        savedailogbx[index].style.display="none"
        postfullscreen[index].style.opacity = 1;
        postfullscreen[index].style.display = "none"
    }
    )
});




postdata.forEach((element , index) => {
    element.addEventListener("click" , (params) => {
      postfullscreen[index].style.display = "flex"
    //    postfullscreen[index].style.opacity = 1;
    }
    )

    cancelscreen[index].addEventListener("click" , (params) => {
        postfullscreen[index].style.display = "none"
    }
    )
});

let displayprofile = document.querySelector(".displayUserdata")
let profileimage = document.querySelector("#profileiamge")



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







