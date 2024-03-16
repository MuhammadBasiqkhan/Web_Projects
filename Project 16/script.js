
let container = document.createElement("div");
let container2 = document.getElementById("displaycontent");
let Question = document.getElementById("Ques")
let optionA = document.getElementById("A")
let optionB = document.getElementById("B")
let optionC = document.getElementById("C")
let optionD = document.getElementById("D")
let Answer = document.getElementById("Ans")
let AddQuestion = document.getElementById("submit")
let displaypanel = document.getElementById("display")

let counterQuestion = 0
let elementcheck = 0;
container.classList = "container";

let Questionarr = [
    {
        Qes: "1. What is the Biggest Animal in the World?",
        A: "Shark",
        B: "Elephant",
        C: "Blue Whale",
        D: "Giraffe",

        Ans: "Blue Whale"
    },
    {
        Qes: "2. What is the Capital of Pakistan?",
        A: "Karachi",
        B: "Islamabad",
        C: "Lahore",
        D: "Multan",

        Ans: "Islamabad"
    },
    {
        Qes: "3. Who was the first Governer General of Pakistan?",
        A: "Nawaz Sharif",
        B: "Allama Iqbal",
        C: "Imran Khan",
        D: "Muhammad Ali Jinnah",

        Ans: "Muhammad Ali Jinnah"
    },
    {
        Qes: "4. What are the colors of the flag of Pakistan",
        A: "Green/white",
        B: "Blue/Green",
        C: "Blue/white",
        D: "none of these",

        Ans: "Green/white"
    },
    {
        Qes: "5. What is the National Animal of Pakistan",
        A: "Markhor",
        B: "Eagle",
        C: "Lion",
        D: "Horse",

        Ans: "Markhor"
    },
];



  displaypanel.addEventListener("click", (e) => {
    
    if (container2.style.display === "none") {
      container2.style.display = "flex";
    } else {
      container2.style.display = "none";
    }
    
    
  })





  AddQuestion.addEventListener("click", (e) => {

  let MainQesstion = (Questionarr.length+1)+". " + Question.value+"?"
  let opA = optionA.value
  let opB = optionB.value
  let opC = optionC.value
  let opD = optionD.value
  let ANsmain = Answer.value


  if(opA=== "" || opB=== "" || opC=== "" || opD=== "" || ANsmain==="" || MainQesstion ===""){

    if(Question.value === ""){
      Question.value = "Fill all the input field"
      Question.style.border = " 1px solid red"
         Question.style.backgroundColor = "#f6525270"
         removeelement()
    }
   if(Answer.value === ""){
      Answer.value = "Fill all the input field"

        Answer.style.border = " 1px solid red"
           Answer.style.backgroundColor = "#f6525270"
           removeelement()
    }
   if(optionA.value === ""){
      optionA.value = "Fill all the input field"
        optionA.style.border = " 1px solid red"
           optionA.style.backgroundColor = "#f6525270"
           removeelement()
    }
   if(optionB.value === ""){
      optionB.value = "Fill all the input field"
        optionB.style.border = " 1px solid red"
        optionB.style.backgroundColor = "#f6525270"
        removeelement()
    }
    if(optionC.value === ""){
      optionC.value = "Fill all the input field"
        optionC.style.border = " 1px solid red"
           optionC.style.backgroundColor = "#f6525270"
           removeelement()
    }
     if(optionD.value === ""){
      optionD.value = "Fill all the input field"
        optionD.style.border = " 1px solid red"
           optionD.style.backgroundColor = "#f6525270"
           removeelement()
    }
  }
  else{
  
    if(ANsmain=== opA || ANsmain === opB  || ANsmain === opC || ANsmain === opD){
      Questionarr.push(
      {
        Qes: MainQesstion,
          A: opA,
          B: opB,
          C: opC,
          D: opD,
  
          Ans: ANsmain
        },)
  
    updateColect()
     Question.value= ""
     optionA.value = ""
     optionB.value = ""
     optionC.value = ""
     optionD.value = ""
     Answer.value = ""
     container2.style.display = "none";
    }
    else{
      console.log("brwe shi lik")
       Answer.value = ANsmain+" Answer not match with the Options"     
       Answer.style.border = "1px solid red"
         Answer.style.backgroundColor = "#f6525270"
         removeelement()
      }
    }
    
  }
   )

   function removeelement(){

     Question.addEventListener("click", (first) => { 
    Question.style.backgroundColor = "transparent" 
    Question.style.border = "1px solid rgba(109, 106, 106, 0.84)" 
    Question.value = ""
  })
  Answer.addEventListener("click", (first) => { 
    Answer.style.backgroundColor = "transparent" 
    Answer.style.border = "1px solid rgba(109, 106, 106, 0.84)" 
    Answer.value = "" 
  })
  optionA.addEventListener("click", (first) => { 
    optionA.style.backgroundColor = "transparent" 
    optionA.style.border = "1px solid rgba(109, 106, 106, 0.84)" 
    optionA.value=""
  })
  optionB.addEventListener("click", (first) => { 
    optionB.style.backgroundColor = "transparent" 
    optionB.style.border = "1px solid rgba(109, 106, 106, 0.84)" 
    optionB.value=""
  })
  optionC.addEventListener("click", (first) => { 
    optionC.style.backgroundColor = "transparent" 
    optionC.style.border = "1px solid rgba(109, 106, 106, 0.84)"
    optionC.value=""
  })
  optionD.addEventListener("click", (first) => { 
    optionD.style.backgroundColor = "transparent" 
    optionD.style.border = "1px solid rgba(109, 106, 106, 0.84)" 
    optionD.value=""
  })
}
  

function updateColect() {
  colect = "";
  for (let index = 0; index < Questionarr.length; index++) {
    const element = Questionarr[index].Ans;
    colect += " " + (index + 1) + ". " + element + "&nbsp;&nbsp;";
  }
}





container.innerHTML = `
  <div class="cont first">
    <p>Simple Quiz</p>
  </div>
  <div class="cont">
    <p>${Questionarr[elementcheck].Qes}</p>
  </div>
  <div class="cont middle">
    <p>${Questionarr[elementcheck].A}</p>
  </div>
  <div class="cont middle">
    <p>${Questionarr[elementcheck].B}</p>
  </div>
  <div class="cont middle">
    <p>${Questionarr[elementcheck].C}</p>
  </div>
  <div class="cont middle">
    <p>${Questionarr[elementcheck].D}</p>
  </div>
  <div class="cont last">
    <button id="next">Next</button>
  </div>`;

let body = document.querySelector("body");
body.appendChild(container);

let selectioncontainer = document.querySelectorAll(".middle")

settingguidlines( Questionarr[elementcheck].Ans)


body.addEventListener("click", function (event) {
    if (event.target.id === "next") {
        elementcheck++;
        if (elementcheck < Questionarr.length) {
            renderQuestion(elementcheck);
            settingguidlines( Questionarr[elementcheck].Ans)
        }
        else if (elementcheck == Questionarr.length) {

            settingguidlines( "heee")
            updateColect()
        }

        else {

         
            container.innerHTML = `<p>All questions answered! your Score board is ${counterQuestion} out of ${Questionarr.length} </p>
            <div class="element">
            <p>Answer Will be</p>
            </div>
            <div class="element secondelement">
            <p>${colect}</p>
            </div> 
            <div class="element">
            <button id="replay">Play Again</button>
            </div> 
            
            `;

            
            container.style.display = "flex";
            container.style.alignItems = "center";
            container.style.justifyContent = "center";

            
let replayButton = document.getElementById("replay");
replayButton.addEventListener("click", () => {
    location.reload();
   
});

        }





    }
});




function renderQuestion(index) {
    container.innerHTML = `
      <div class="cont first">
        <p>Simple Quiz</p>
      </div>
      <div class="cont">
        <p>${Questionarr[index].Qes}</p>
      </div>
      <div class="cont middle">
        <p>${Questionarr[index].A}</p>
      </div>
      <div class="cont middle">
        <p>${Questionarr[index].B}</p>
      </div>
      <div class="cont middle">
        <p>${Questionarr[index].C}</p>
      </div>
      <div class="cont middle">
        <p>${Questionarr[index].D}</p>
      </div>
      <div class="cont last">
        <button id="next">Next</button>
      </div>`;

}




body.addEventListener("click", function (event) {
    if (event.target.classList.contains("middle")) {
      let selectioncontainer = document.querySelectorAll(".middle");
        let lastelement = document.querySelector(".last");
        lastelement.style.display = "flex";
        lastelement.style.alignItems = "center";
        lastelement.style.justifyContent = "center";
        lastelement.style.transition ="all 0.3s linear"
        selectioncontainer.forEach(element => {
          element.classList.remove("middle");
          element.classList.add("secondclass")
        });

        
    }


});

function settingguidlines( ans) {
    let clicked = false;
    checkinganswer(clicked, ans)
}
function checkinganswer(clicked, ans) {
  let selectioncontainer = document.querySelectorAll(".middle");

  selectioncontainer.forEach((here) => {
    here.addEventListener("click", (params) => {
      if (!clicked) {
        clicked = true;
        let comment = "" + params.target.innerText;
        if (comment === ans) {
          here.style.backgroundColor = "#64de647a";
          here.style.color = "#373434";
          here.innerHTML = `<p>"${comment}" is the right Answer</p>`;
          counterQuestion++;
        } else {
          here.style.backgroundColor = "#f6525270";
          here.style.color = "#373434";
          here.innerHTML = `<p>${comment} is a Wrong Answer</p>`;
         
          selectioncontainer.forEach(element => {
            if(element.innerText === ans){
              element.innerHTML=`<p>"${ans}" is the right Answer</p>`
              element.style.backgroundColor= "#64de647a"
              element.style.color = "#373434";
            }
          });

        }
      }
    });
  });
}

