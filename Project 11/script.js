let pause = document.getElementById("resume");
let Play = document.getElementById("play");
let reset = document.getElementById("reset");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let intervalId;
let i = 0;
let m = 0;
let h = 0;


Play.addEventListener("click", function () {
   
    intervalId = setInterval(function () {
        i++;
        if (i === 60) {
            i = 0;
            m++;
            if (m === 60) {
                m = 0
                h++
                if (h === 24) {
                    h = 0
                }
                if (h < 10) {
                    hours.innerHTML = "0" + h
                }
                else {
                    hours.innerHTML = h
                }

            }
            if (m < 10) {
                minutes.innerHTML = "0" + m;
            } else {
                minutes.innerHTML = m;
            }
        }

        if (i < 10) {
            seconds.innerHTML = "0" + i;
        } else {
            seconds.innerHTML = i;
        }

    }, 1000);
});

pause.addEventListener("click", function () {
    clearInterval(intervalId);
});


reset.addEventListener("click", function () {
    clearInterval(intervalId);
    hours.innerHTML = "00"
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
});
