
let buttons = document.getElementsByClassName('btnch');
let display = document.getElementById("display");
let inputValue = "";

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', function (event) {

        let name = event.target.value
        if (name === "AC") {
            inputValue = ""
        }
        else if (name === "DE") {
            inputValue = inputValue.slice(0, -1)
        }

        else if (name === "=") {

                inputValue = Calculation(inputValue)
           
        }
        else {
            inputValue += name;
        }

        display.innerText = inputValue;
    });
    
}

function Calculation(str) {
    if (str.includes('+')) {
        let char = '+';
        let position = str.indexOf(char);
        if(position === 0 || position === str.length-1){
            return str
        }
        else{
            let firsttomiddle = parseInt(str.slice(0, position))
            let middleetilast = parseInt(str.slice(++position))
            return ""+(firsttomiddle + middleetilast);

        }
        
    }
    else if(str.includes('-')){
        let char = '-';
        let position = str.indexOf(char);

        if(position === 0 || position === str.length-1){
            return str
        }
        else{
            let firsttomiddle = parseInt(str.slice(0, position))
            let middleetilast = parseInt(str.slice(++position))
            return ""+(firsttomiddle - middleetilast);

        }
    }
    else if(str.includes('*')){
        let char = '*';
        let position = str.indexOf(char);

        if(position === 0 || position === str.length-1){
            return str
        }
        else{
            let firsttomiddle = parseInt(str.slice(0, position))
            let middleetilast = parseInt(str.slice(++position))
            return ""+(firsttomiddle * middleetilast);

        }
    }
    else if(str.includes('/')){
        let char = '/';
        let position = str.indexOf(char);

        if(position === 0 || position === str.length-1){
            return str
        }
        else{
            let firsttomiddle = parseInt(str.slice(0, position))
            let middleetilast = parseInt(str.slice(++position))
            return ""+(firsttomiddle / middleetilast);

        }
    }
    else{
        return "Invalid input"
    }
}




// additional functionalities of keyboard


document.addEventListener('keydown', function(event) {

    if(/[0-9.+\-*\/=]|Enter|Backspace|Delete/.test(event.key)) {
        let key = event.key;

      
        if (key === "Enter") {
            key = "=";
        }

        if (key === "Delete") {
            inputValue = "";
        } else if (key === "Backspace") {
            inputValue = inputValue.slice(0, -1);
        } else if (key === "=") {
            inputValue = Calculation(inputValue);
        } else {
            inputValue += key;
        }

       
        display.innerText = inputValue;
    }
});


display.focus();
