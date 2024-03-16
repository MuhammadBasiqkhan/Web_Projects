let printpasword = document.getElementById("printpass")
let genbtn = document.getElementById("gen")
let copybtn = document.getElementById("copybtn")


genbtn.addEventListener("click" , () => { 
   let password = generateRandomPassword(12)

   printpasword.innerText = password
})



copybtn.addEventListener("click" , (first) => { 

    let text = printpasword.innerText
    navigator.clipboard.writeText(text)
    .then(() => {
      alert("Text copied to clipboard: " + text);
    })
    .catch(err => {
      console.error('Could not copy text: ', err);
    });

       
})




function generateRandomPassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
      
    }
    return password;
  }
  