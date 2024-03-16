document.addEventListener("DOMContentLoaded", function () {
    // Get references to all necessary elements
    let buttons = document.querySelectorAll(".btnground");
    let fontcolor = document.getElementById("fontcolor");
    let highlight = document.getElementById("Highlightcolor");
    let selects = document.querySelectorAll('select');
  

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let btnValue = button.getAttribute('value');
            if (btnValue.includes("align")) {
                marginText(btnValue);
            } else {
                formatText(btnValue);
            }
        });
    });

    // Event listener for font color input
    fontcolor.addEventListener("input", function (event) {
        const selectedColor = event.target.value;
        formatText('foreColor', selectedColor);
    });

    // Event listener for highlight color input
    highlight.addEventListener("input", function (event) {
        const selectedColor = event.target.value;
        formatText('backColor', selectedColor);
    });

    // Event listeners for select dropdowns
    selects.forEach(function (select) {
        select.addEventListener('change', function () {
            let options = select.selectedOptions;
            if (select.id === "select1") {
                let heading = options[0].value;
                // Do something with heading if needed
            } else if (select.id === "select2") {
                let font = options[0].value;
                console.log(font)
                formatText('fontName', font);
            } else if (select.id === "select3") {
                let size = options[0].value + 'px'; 
                console.log(size)
                formatText('fontSize', size);
            }
        });
    });

    // Function to apply text formatting
    function formatText(command, value = null) {
        if (value !== null) {
            document.execCommand(command, false, value);
        } else {
            document.execCommand(command, false, null);
        }
    }

    // Function to apply text alignment
    function marginText(command) {
        if (command === "left-align-btn") {
            document.getElementById('editor').style.textAlign = 'left';
        } else if (command === "center-align-btn") {
            document.getElementById('editor').style.textAlign = 'center';
        } else if (command === "right-align-btn") {
            document.getElementById('editor').style.textAlign = 'right';
        }
    }
});
